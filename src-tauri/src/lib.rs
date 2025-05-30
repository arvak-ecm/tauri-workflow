mod core;
use core::cmd;
use tauri::Manager;
use tauri::{command, Emitter, Window};
use tauri_plugin_oauth::start;
use tauri_plugin_oauth::{start_with_config, OauthConfig};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[command]
async fn start_server(window: Window) -> Result<u16, String> {
    start(move |url| {
        print!("URL: {:?}", url);
        let _ = window.emit("redirect_uri", url);
    })
    .map_err(|err| err.to_string())
}

#[command]
async fn start_server_with_config(window: Window) -> Result<u16, String> {
    let config = OauthConfig {
        ports: Some(vec![1430, 1431, 1432]),
        response: Some("OAuth process completed. You can close this window.".into()),
    };

    start_with_config(config, move |url| {
        print!("URL: {:?}", url);
        let _ = window.emit("oauth://index", url);
    })
    .map_err(|err| err.to_string())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_single_instance::init(
            |app_handle, _argc, _cwd| {
                let windows = app_handle.webview_windows();
                if let Some(windows) = windows.values().next() {
                    let _ = windows.set_focus();
                }
            },
        ))
        //.plugin(tauri_plugin_oauth::init())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_http::init())
				.plugin(tauri_plugin_dialog::init())
        .plugin(
            tauri_plugin_store::Builder::default()
                .register_deserialize_fn("deserialize_cripto".to_owned(), cmd::deserialize_cripto)
                .register_serialize_fn("deserialize_cripto".to_owned(), cmd::serialize_cripto)
                .default_serialize_fn(cmd::serialize_cripto)
                .default_deserialize_fn(cmd::deserialize_cripto)
                .build(),
        )
        .plugin(tauri_plugin_oauth::init())
        .plugin(tauri_plugin_deep_link::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            start_server,
            start_server_with_config
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

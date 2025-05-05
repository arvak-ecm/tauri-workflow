use tauri::Manager;
use tauri::{command, Emitter, Window};
use tauri_plugin_oauth::{start_with_config, OauthConfig};
use tokio;

#[command]
async fn start_server(window: Window) -> Result<u16, String> {
    let config = OauthConfig {
        ports: Some(vec![1420]),
        response: Some(r#"
    <!DOCTYPE html>
    <html>
      <head>
        <script>
          window.location.href = 'tauri://localhost';
        </script>
      </head>
      <body>
        Redirigiendo a la app...
      </body>
    </html>
  "#.into()),
    };

    tokio::spawn(async move {
        start_with_config(config, move |url| {
            let _ = window.emit("redirect_uri", url);
        })
        .map_err(|err| err.to_string())
    }).await.map_err(|e| e.to_string())?
}


#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
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
				.plugin(tauri_plugin_oauth::init())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_store::Builder::default().build())
        .invoke_handler(tauri::generate_handler![greet, start_server])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

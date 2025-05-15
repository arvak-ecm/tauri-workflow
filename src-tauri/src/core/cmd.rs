use crate::core::cripto::Cripto;
use serde_json::Value as JsonValue;
use std::collections::HashMap;

#[tauri::command]
pub fn serialize_cripto(
    map: &HashMap<String, JsonValue>,
) -> Result<Vec<u8>, Box<dyn std::error::Error + Send + Sync>> {
    let key = b"miClaveSecreta123456789012345600";
    let cripto = Cripto::new(key);

    let mut encrypted_map = HashMap::new();

    for (k, v) in map {
        if let JsonValue::Object(obj) = v {
            // Verificamos si es solo { "value": ... }
            if obj.len() == 1 && obj.contains_key("value") {
                // Serializar cualquier tipo de value a string
                let serialized = serde_json::to_string(&obj["value"])?;
                let encrypted = cripto.encrypt(serialized.as_bytes());

                // Insertamos el nuevo objeto con el valor encriptado
                let mut new_obj = serde_json::Map::new();
                new_obj.insert("value".to_string(), JsonValue::String(encrypted));
                encrypted_map.insert(k.clone(), JsonValue::Object(new_obj));
                continue;
            }
        }

        // Si no cumple, se guarda tal cual
        encrypted_map.insert(k.clone(), v.clone());
    }

    let bytes = serde_json::to_vec(&encrypted_map)?;
    Ok(bytes)
}

#[tauri::command]
pub fn deserialize_cripto(
    bytes: &[u8],
) -> Result<HashMap<String, JsonValue>, Box<dyn std::error::Error + Send + Sync>> {
    let key = b"miClaveSecreta123456789012345600";
    let cripto = Cripto::new(key);

    let encrypted_map: HashMap<String, JsonValue> = serde_json::from_slice(bytes)?;
    let mut decrypted_map = HashMap::new();

    for (k, v) in encrypted_map {
        if let JsonValue::Object(mut obj) = v {
            if let Some(JsonValue::String(enc_val)) = obj.get("value") {
                let decrypted_str = cripto.decrypt(enc_val);
                let parsed: JsonValue = serde_json::from_str(&decrypted_str)
                    .unwrap_or(JsonValue::String(decrypted_str));

                obj.insert("value".to_string(), parsed);
            }
            decrypted_map.insert(k, JsonValue::Object(obj));
        } else {
            decrypted_map.insert(k, v);
        }
    }

    Ok(decrypted_map)
}

use aes_gcm::{
    aead::{generic_array::GenericArray, Aead, AeadCore, KeyInit, OsRng},
    Aes256Gcm, Key, Nonce,
};
use hex;
pub struct Cripto {
    key: Key<Aes256Gcm>,
}

impl Cripto {
    pub fn new(key: &[u8; 32]) -> Self {
        Self {
            key: GenericArray::clone_from_slice(key),
        }
    }

    pub fn encrypt(&self, plaintext: &[u8]) -> String {
        let nonce = Aes256Gcm::generate_nonce(&mut OsRng);
        let cipher = Aes256Gcm::new(&self.key);
        let ciphertext = cipher.encrypt(&nonce, plaintext.as_ref()).unwrap();
        let mut encrypted = nonce.to_vec();
        encrypted.extend(ciphertext);
        hex::encode(encrypted)
    }

    pub fn decrypt(&self, encrypted: &str) -> String {
        let encrypted_bytes = hex::decode(encrypted).unwrap();
        let nonce = Nonce::from_slice(&encrypted_bytes[..12]);
        let ciphertext = &encrypted_bytes[12..];
        let cipher = Aes256Gcm::new(&self.key);
        let plaintext = cipher.decrypt(nonce, ciphertext).unwrap();
        String::from_utf8(plaintext).unwrap()
    }
}

const { clear } = require('console');
const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

// encryption function
function encrypt(plaintext, key, iv){
    const cipher = createCipheriv('aes-256-cbc', key, iv); // cipher block chaining
    let ciphertext = cipher.update(plaintext, 'utf8', 'base64');
    ciphertext += cipher.final('base64');
    return ciphertext;
}

// decryption function
function decrypt(ciphertext, key, iv){
    const decipher = createDecipheriv('aes-256-cbc', key, iv);
    let cleartext = decipher.update(ciphertext, 'base64', 'utf8');
    cleartext += decipher.final('utf8');
    return cleartext;
}

// Example usage
const plaintext = 'Hello, AES!';
console.log('Plaintext:', plaintext);

const key = randomBytes(32); // 256-bit key
const iv = randomBytes(16); // Initialization vector

const encryptedText = encrypt(plaintext, key, iv);
console.log('Encrypted text:', encryptedText);

const decryptedText = decrypt(encryptedText, key, iv);
console.log('Decrypted text:', decryptedText);
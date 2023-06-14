const crypto = require('crypto');

// Generate RSA key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048, // always use 2048 bits
});

// Original message
const message = 'Hello, RSA!';

// Encrypting the message with the public key
const encryptedData = crypto.publicEncrypt(
    {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256', //NEVER USE MD5
    },
    message
);

// Decrypting the encrypted data with the private key
const decryptedData = crypto.privateDecrypt(
    {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
    },
    encryptedData
);

// Printing the results
console.log('Original message:', message);
console.log('Encrypted data:', encryptedData.toString('base64'));
console.log('Decrypted data:', decryptedData.toString());

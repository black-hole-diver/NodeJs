const crypto = require('crypto');

// Generate Alice's private and public keys
const alice = crypto.createDiffieHellman(2048);
const alicePublicKey = alice.generateKeys();

// Generate Bob's private and public keys
const bob = crypto.createDiffieHellman(2048);
const bobPublicKey = bob.generateKeys();

// Exchange public keys
// Alice sends her public key to Bob, and Bob sends his public key to Alice

// Compute shared secret using Alice's private key and Bob's public key
const aliceSharedSecret = alice.computeSecret(bobPublicKey);

// Compute shared secret using Bob's private key and Alice's public key
const bobSharedSecret = bob.computeSecret(alicePublicKey);

// Both Alice and Bob now have the same shared secret key
console.log('Alice shared secret:', aliceSharedSecret.toString('hex'));
console.log('Bob shared secret:', bobSharedSecret.toString('hex'));
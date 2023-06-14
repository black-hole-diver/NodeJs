/*
HMAC: hash with a key
Only smn with the key can create an authentic hash
Very easy to do in Node.js
*/

const crypto = require('crypto');

const password = 'victory';
const message = 'ATTACKATDAWN';

const hmac = crypto.createHmac('sha256', password).update(message).digest('hex');

console.log(hmac);
/*
HMAC: hash with a key
Only smn with the key can create an authentic hash
Very easy to do in Node.js
*/

const { createHmac } = require('crypto');

const password = 'victory';
const message = 'ATTACKATDAWN';

const hmac = createHmac('sha256', password).update(message).digest('hex');

console.log(hmac);
// npm install otpauth

const { HOTP } = require('otpauth');

const secretKey = 'ATTACKATJUPITER';
const otp = new HOTP({ secret: secretKey}).generate();

console.log('Generated OTP: ', otp);
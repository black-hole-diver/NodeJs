/*
SHA(Secure Hashing Algorithm): produce random unique fixed-length string from a given input
Very expensive to find original input
Small probability of collision
*/

const { createHash } = require('crypto');

// Create a string hash
function hash(str){
    return createHash('sha256').update(str).digest('hex');
}

// Compare 2 hashed passwords
let password = 'github_yeah#';
const hash1 = hash(password);
console.log(hash1); // 0cb9722e01caf5ae8590fbe14a76e04c24e5e745c71523d63b81aaf31b7ebcb4

let password2 = 'github_yeah*';
const hash2 = hash(password2);
console.log(hash2); // 0930dc9dcedb42ad30188d33a90ae6c207f6b593020ae351c40691c80537b3d8

const match = hash1 == hash2
console.log(match? '✔️ Good password' : '❌ Password does not match')
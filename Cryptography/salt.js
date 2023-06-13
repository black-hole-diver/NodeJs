/*
Put a random string to the input before hashing.
Hash more unique, harder to guess like 'password123' -> Rainbow table (ref: https://en.wikipedia.org/wiki/Rainbow_table)
*/

const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

function signup(email, password){
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex'); // adding salt to the password
    const user = { email, password: `${salt}:${hashedPassword}` };
    users.push(user);
    return user;
}

function login(email, password){
    const user = users.find(v => v.email === email);

    const [salt, key] = user.password.split(':');

    const hashedBuffer = scryptSync(password, salt, 64);
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match){
        return 'login success!';
    } else {
        return 'login failed!';
    }
}

const users = [];
const user = signup('salt@gmail.com', 'password123');

console.log(user);
const result = login('salt@gmail.com', 'password123');
console.log(result);
const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')

jwt.sign
jwt.verify

var data = {
    id: 10
}

var token = jwt.sign(data, '123abc')

console.log(token)

var decode = jwt.verify(token, '123abc')

console.log('Decode', decode)

// var msg1 = "anandp926";
// var msg2 = "Anandp926@";
// var msg3 = "0jfrxF6f";
// var msg4 = "0jfrxF6f@";

// var hash1 = SHA256(msg1).toString();
// var hash2 = SHA256(msg2).toString();
// var hash3 = SHA256(msg3).toString();
// var hash4 = SHA256(msg4).toString();


// console.log('hash: ', hash1)
// console.log('hash: ', hash2)
// console.log('hash: ', hash3)
// console.log('hash: ', hash4)
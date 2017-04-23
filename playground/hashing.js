const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    // console.log(salt);
    bcrypt.hash(password, salt, (err, hash) => { 
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$Mbhtf.OiqQWjjEIda3XIKOewmlllz/Bb.PLyfcV889bV3Raz22yPO';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});


// const {SHA256} = require('crypto-js');
//265 je broj bitova kolko ce imati hash
// const jsw = require('jsonwebtoken');

// var message = 'I am user number 3';
// console.log(SHA256(message));
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);


// var data = {
//     id: 4 
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
// console.log(JSON.strsingify(token, undefined, 2));

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash) {
//     console.log('Data was not change');
// } else {
//     console.log('Data was changed. Do not trust!');
// }


// var data = {
//     id: 10
// };

// var token = jsw.sign(data, '123abc');
// console.log('token', token);
// var decoded = jsw.verify(token, '123abc');
// console.log('decoded', decoded);

const mongoose = require('mongoose');
const validator = require('validator');
const jsw = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');


var UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            // validator: (value) => {
            //     return validator.isEmail(value);
            // },
            validator: validator.isEmail,
            isAsync: false,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        //Tip tokena
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});


//metoda toJSON je metodakoja nam vraca objekat iz baze
//Ovim override-jemo metodu da bi vratili samo odredjene stvari
UserSchema.methods.toJSON = function() {
    var user =  this;
    var userObject = user.toObject();
    return _.pick(user, ['_id', 'email']);
};

//methods je property u mongoosu koji omoguca da se pisu metode na modelima
UserSchema.methods.generateAuthToken = function() {
    var user =  this;
    var access = 'auth';
    var token = jsw.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
    user.tokens.push({access, token});

    return user.save()
        .then(() => {
            return token;
        });
};

UserSchema.methods.removeToken = function(token) {
    var user = this;
    return user.update({
            $pull: {
                tokens: {token}
            }
        });
}

UserSchema.statics.findByToken = function(token) {
    var User =  this;
    var decoded; 

    try{
        decoded = jsw.verify(token, 'abc123');
    } catch (err) {
        // return new Promise((resolve, reject) => {
        //     reject()
        // });
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth',
    });
};

UserSchema.statics.findByCredentials = function(email, password) {
    var User =  this;

    return User.findOne({email})
        .then((user) => {
            if(!user){
                return Promise.reject();
            } 
            return new Promise((resolve, reject) => {
                bcrypt.compare(password, user.password, (err, res) => {
                    if(res) {
                        resolve(user);
                    } else {
                        reject();
                    }
                });
            });
        });
};

UserSchema.pre('save', function(next) {
    var user = this;

    if(user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => { 
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = {User};
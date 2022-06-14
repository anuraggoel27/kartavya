const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const pathToKey = path.join(__dirname,'rsa_priv.pem');
const priv_key = fs.readFileSync(pathToKey,'utf8');

const validatePassword = (password,salt,hash) =>{
    const hashVerify = crypto.pbkdf2Sync(password,salt,10000,64,'sha512').toString('hex');

    return hash === hashVerify;
}

const genPassword = (password) =>{
    const salt = crypto.randomBytes(32).toString('hex');
    const hash = crypto.pbkdf2Sync(password,salt,10000,64,'sha512').toString('hex');

    return {
        salt:salt,
        hash:hash
    }
}


const issueJwt = (user)=>{
    const id = user._id;
    const expiresIn = '1d';

    const payload = {
        sub:id,
        iat: Date.now()
    }

    const signedToken = jsonwebtoken.sign(payload,priv_key,{expiresIn:expiresIn , algorithm:'RS256'});

    return {
        token: "Bearer "+signedToken,
        expires: expiresIn
    }
}

module.exports = {validatePassword,genPassword,issueJwt}


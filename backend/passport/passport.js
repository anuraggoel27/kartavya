const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const fs = require('fs');
const path = require('path');
const {Users} = require('../db/model');

const pathToKey = path.join(__dirname,'rsa_pub.pem');
const publicKey = fs.readFileSync(pathToKey,'utf-8');

const options={
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: publicKey,
    algorithms: ['RS256']
}

passport.use(new JWTStrategy(options, (jwt_payload,done)=>{

    Users.findOne({_id:jwt_payload.sub},(err,user)=>{
        if(err) return done(err,false);
        if(user) return done(null,user);
        else return done(null,false);
    })


}));
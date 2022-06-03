const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID ="513318995384-5tkj1o8a34pq5hiqnksner5md9p68a80.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const { TempUsers } = require('../db/model');

passport.use(new GoogleStrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL:"http://localhost:5000/auth/google/callback"
},
    async (accessToken,refreshToken,profile,done) => {
        const username = profile.name.givenName;
        const googleID = profile.id;
        const isAdmin = true;
        
        const user = await TempUsers.findOne({googleID:googleID});
        if(!user){
            console.log('Creating new user');
            const newUser = await TempUsers.create({username:username,googleID:googleID,isAdmin:isAdmin});
            done(null,newUser);
        }
        else{
            console.log('User already exists');
            done(null,user);
        }

        
    }
))

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser(async (id,done)=>{
    try {
        const user = await TempUsers.findById(id);
        done(null,user);
        
    } catch (error) {
        console.log(error);
    }
})
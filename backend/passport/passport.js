const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID ="513318995384-5tkj1o8a34pq5hiqnksner5md9p68a80.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL:"http://localhost:5000/auth/google/callback"
},
    function(accessToken,refreshToken,profile,done){
        done(null,profile);
    }
))

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
})
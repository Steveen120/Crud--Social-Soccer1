const passport = require('passport');
const passpor = require('passport'); 
const LocalStrategy = require('passport-local').Strategy;



passport.use('local.signup', new LocalStrategy ({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true 
}, async(req, username, password, done) => {
    const{ fullname } = req.body
    const newUser = {
        username,
        password,
        fullname
    };
    
}));

//password.serializeUser((usr,done) => {

//});
const express = require('express');
const app=express();
const cors= require('cors');
const passport = require('passport');
const passportSetup = require('./passport/passport');
const connectDB = require('./db/connect');

//MiddleWares import
const adminCheck = require('./middleware/adminCheck');

//Routes Import-----------------------------------------
//Open Routes
const loginRouteOpen = require('./routes/OpenRoutes/user');
//Protected Routes
const filesProtected = require('./routes/ProtectedRoutes/file')
const noticesProtected = require('./routes/ProtectedRoutes/notices');
//Admin Routes
const filesAdmin = require('./routes/AdminRoutes/file')
const registerRouteAdmin = require('./routes/AdminRoutes/user')
const noticesAdmin = require('./routes/AdminRoutes/notices')
//Routes Import Closed------------------------------




app.use(passport.initialize());
app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials:true
}))
app.use(express.json());

/*
Now We have to efficiently use middlewares:
No routes not requiring any authentication will be at top.
Then we will use passport authentication after than routes requiring user authentocation can be accessed.
After that we will use adminCheck middleware and then any routes requiring admin powers will be placed.
*/

//Routes Start----------------------

//Open Routes:
app.use('/users',loginRouteOpen);

//Protected Routes:
app.use(passport.authenticate('jwt',{session:false}));
app.use('/file',filesProtected);
app.use('/notices',noticesProtected);

//Admin Routes:
app.use(adminCheck);
app.use('/file',filesAdmin);
app.use('/users',registerRouteAdmin);
app.use('/notices',noticesAdmin);



//Routes Over----------------------------
const startBackendServer = async() =>{
    try {
        await connectDB();
        
        app.listen(5000,()=>console.log('server running'))

    } catch (error) {
        console.log(error);
    }
}

startBackendServer();
const mongoose = require('mongoose');
const MONGO_URI="mongodb+srv://kartavya:noone_sunny@node-express.c4wrl.mongodb.net/Kartavya?retryWrites=true&w=majority"

const connectDB =async ()=>{
    try{
        await mongoose.connect(MONGO_URI);
        console.log('Database Connected');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB;
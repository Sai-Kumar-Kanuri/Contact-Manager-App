const mongoose = require('mongoose');

const connectDb = async ()=>{
    try {
       const connection = await mongoose.connect(process.env.CONNECTION_STRING);
       console.log("Connected to database");
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;
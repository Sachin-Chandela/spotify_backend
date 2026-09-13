import mongoose from 'mongoose';

import dns from "dns";




async function connect(){

    try{
        dns.setServers(["8.8.8.8", "8.8.4.4"]);
       await mongoose.connect(`${process.env.MONGODB_URI}spotify`); 
       console.log("Database Connected");
    }

    catch(err){
        console.log("Error connecting to the Database");
    }
    
}


export default connect;




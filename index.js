const express=require("express");
const app=express();
const mongoose=require("mongoose")
const dotenv =require("dotenv")
const userRoute=require("./routes/users")
const authRoute=require("./routes/auth")




dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
).then(()=>console.log("db connection successful")).catch((err)=>{
    console.log(err);
});


app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);


app.listen( process.env.PORT ||3001,()=>{
    console.log("listening on port 3001");
});
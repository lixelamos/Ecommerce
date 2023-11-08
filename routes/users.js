const {verifyToken, verifyTokenAndAuthorization} =require("./verifyToken.js")

const router=require("express").Router();


//UPDATE 

router.put("/:id",verifyTokenAndAuthorization,async (req,res)=>{
if (req.body.password){
    req.body.password=CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString();

}
try{
    const updatedUser= await User.findByIdAndUpdate(req.params.id,{
        $set:req.body,
    },{new:true})
    res.status(200).json("updated user")
}catch(err){
        res.status(500).json(err);
    }
    res.status(200).json(updatedUser)
});



module.exports =router;
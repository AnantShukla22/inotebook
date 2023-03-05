var jwt=require("jsonwebtoken")
const JWT_SCERET='anantisagoodboy'

const fetchuser=(req,res,next)=>{

    // get the user from the token and add id to req object
    // go to header in thunderclient left side mai auth-token right mai token address
    const token =req.header('auth-header')
    if(!token){
        res.status(401).send({error: "please authenticate using a valid token"})
    }
    try{
        const data =jwt.verify(token, JWT_SCERET);
        req.user=data.user;   // here we got the user data
        next();
    }catch(error){
        res.status(401).send({error:"please authenticate using a valid token"})
    }
}

module.exports=fetchuser;
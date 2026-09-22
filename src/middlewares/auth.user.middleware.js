import jwt, { decode } from 'jsonwebtoken'

export async function authUser(req,res,next){

    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({
          success: false,
          message: "Unauthorized no token",
        });
    }


    try{

        const decoded=await jwt.verify(token,process.env.JWT_SECRET);


        if(decoded.role=='artist' || decoded.role=='user'){
            req.user=decoded;

            next();
        }
        else{

            return res.status(401).json({
              success: false,
              message: "Unauthorized doesnot verify",
            });

        }

        
    }
    catch(err){
        return res.status(401).json({
          success: false,
          message: "Unauthorized error in mogodb",
        });

    }
    

}
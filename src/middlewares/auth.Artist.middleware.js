
import jwt from "jsonwebtoken"

export function authArtist(req,res,next){

    const token=req.cookies.token;

    if (!token) {
      console.log("No Token");

      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }


    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);


        if(decoded.role!='artist'){
          return res.status(401).json({
            success: false,
            message: "Unauthorized",
          });
        }


        req.user=decoded;

        next();

    }
    catch(err){
      

      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
}



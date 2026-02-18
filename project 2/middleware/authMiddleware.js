const jwt = require('jsonwebtoken');
function authMiddleware(req,res,next){
  const token = req.headers.authorization;
  if(!token){
     return res.status(401);
     res.redirect('/login');}
  try{
    const decoded = jwt.verify(token, process.env.JWT-KEY);
    req.userId = decoded.userId;
    req.userSub = decoded.userSub;
    next();
  }
catch(err){
  console.log('Unauthorized access');
}
return authMiddleware;
}
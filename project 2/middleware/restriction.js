const User = require('/model/user');

exports.invoiceLimit = async (req, res, next)=>{
  const user = await User.findById(req.userId);
  if(user.subscribtion === 'free' && user.usage.invoicesCreated === 10){
    next(new Error('Out of free tokens'+\n'You have used up your 10 free tokens, updrage for more.+\n'your tokens will reset in 28 days!'));
    setTimeout(()=>{
      next();
    }, 1000*60*60*24*7*4);
  }else{
  next();}
}
  
  exports.emailLimit = async (req, res, next)=>{
  const user = await User.findById(req.userId);
  if(user.subscribtion === 'free' && user.usage.emailsSent === 10){
    next(new Error('Out of free tokens'+\n'You have used up your 10 free tokens, updrage for more.+\n'your tokens will reset in 28 days!'));
    setTimeout(()=>{
      next();
    }, 1000*60*60*24*7*4);
  }else{
    next();
  }
  }
  
  exports.clientLimit = async (req, res, next)=>{
  const user = await User.findById(req.userId);
  if(user.subscribtion === 'free' && user.usage.clientsCreated === 10){
    next(new Error('Out of free tokens'+\n'You have used up your 10 free tokens, updrage for more.+\n'your tokens will reset in 28 days!'));
    setTimeout(()=>{
      next();
    }, 1000*60*60*24*7*4);
  }else{
    next();
  }
   
}
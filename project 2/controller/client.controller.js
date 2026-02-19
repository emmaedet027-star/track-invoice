const Client = require('/model/client');
const User = require('/model/user');
// Create client 
exports.createClient = async (req, res)=>{
  const{name, email, address, tasktype} = req.body;
  try{
     const client = await Client.create(
     userId: req.userId,
     name: name,
     email: email,
     address: address,
     tasktype: tasktype,
     status 
);
const user = await User.findOne({_id: req.userId});
user.usage.clientsCreated++;
await res.status(200).json({client});  }
  catch(err){
  console.log(err);
} 

//display all client
exports.viewClient = async (req,, res)=>{
  let list = [];
  const clients = await Client.find();
  for(client of clients):
  if(client.userId === req.userId){
    list.push(client);
    list.forEach(function(l){
      res.json(${l.name});
      res.json(list.len(););
    });
  }
}

//display one client
exports.viewOneClient = async (req,, res)=>{
  const client = await Client.findById(req.params.id);
  if(client.userId !== req.userId){
    return res.status(400);
  }
  res.json({${client}});
}
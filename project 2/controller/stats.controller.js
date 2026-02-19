const Invoice = require('../model/invoice');
const Client = require('../model/client');
const User = require('../model/user');

// statistics
exports.statsDashboard = async(req, res)=>{
  const dashboard = [];
  const pending = await Invoice.countDocuments({req.userId, payStatus:'pending'});
  const paid = await Invoice.countDocuments({req.userId, payStatus:'successful'});
  const denied = await Invoice.countDocuments({req.userId, payStatus:'unsuccessful'}); 
  const clientNum = await Client.countDocuments({req.userId, usage.clientsCreated: 'type'});
  const user = await User.findOne({req.userId});
  const sub = user.subscribtion;
  const totalRevenue = paid.reduce((acc, inv)=> acc + inv.total, 0);
  dashboard.push(pending, paid, denied, clientNum, sub, totalRevenue);
  res.json({dashboard.join('\n');});
}
const Invoice = require('../model/invoice');
const Client = require('../model/client');

// Create invoice 
exports.createInvoice = async (req, res)=>{
  try{
     const invoice = await Invoice.create({
     userId: req.userId,
     clientId: req.params.id,
     item: item,
     total: total,
     tax: tax,
     dueDate: date,
     payStatus: payment-status,
     status: invoice-status 
});
const user = await User.findOne({_id: req.userId});
user.usage.invoicesCreated++;
await res.status(200).json('successful');  }
  catch(err){
  console.log(err);
} 
} 

//edit invoice
exports.editInvoice = async(req, res)=>{
  const invoice = await Invoice.findById(req.params.id);
  if(invoice.userId !== req.userId){
    return res.status(400).json({'Not Allowed!'});
  }
  try{
    const{item, total, tax, dueDate, pdfUrl, payStatus, status} = req.body;
    await Invoice.findByIdAndUpdate(
      req.params.id,
      req.body);
      await res.status(200).json('successful');
  }
  catch(err){
    conole.log(err);
  }
}

//send invoice
exports.sendInvoice = async(req, res)=>{
  const invoice = await.findById(req.params.id);
  if(invoice.userId !== req.userId){
    return res.status(400).json({'Not Allowed!'});
  }
  const clientId = invoice.clientId;
  const userId = invoice.userId;
  const item = invoice.item;
  const tax = invoice.tax;
  const total = invoice.total; 
  const dueDate = invoice.dueDate;
  const createdAt = invoice.cretedAt;
  const payStatus = invoice.payStatus;
  const status = invoice.status;
  const content = [];
  content.push(clientId, userId, item, tax, total, dueDate, createdAt, payStatus, status);
  const job = agenda.create('send-invoice', {
    date: Date.now,
    to: sendTo
    body: [content.join('\n')],
    userId: req.userId
  });
  job.now('send-invoice');
  res.status(200).json({'sent successful!'});
}
catch(err){
  console.log(err);
}

//Create email
exports.createEmail = async(req, res)=>{
 try{
  const{sendTo, msg} = req.body;
  const job = agenda.create('send-msg', {
    date: Date.now,
    to: sendTo,
    body: msg,
    userId: req.userId
  });
  await job.save();
  await res.status(200);
}
catch(err){
  console.log(err);
}
}

//Schedule email to send
exports.scheduleEmail = async(req, res)=>{
  const jobs = agenda.jobs({_id: req.params.id});
  const job = jobs[0];
  if (job.attrs.data.userId !== req.userId){
    return res.status(400).json({'Not allowed!'});
  }
  try{
    const{date} = req.body;
    job.schedule(date, 'send-msg');
    await job.save();
    const user = await User.findOne({_id: req.userId});
user.usage.emailsSent = ++;
    await res.status(200).json({'schedule successful!'});
  }
  catch(err){
    console.log(err);
  }
}

//send now
exports.sendEmail = async(req, res)=>{
  const jobs = agenda.jobs({_id: req.params.id});
  const job = jobs[0];
  if (job.attrs.data.userId !== req.userId){
    return res.status(400).json({'Not allowed!'});
  }
  try{
    await job.now();
    await job.save();
    const user = await User.findOne({_id: req.userId});
user.usage.emailsSent++;
  }
  catch(err){
    console.log(err);
  }
}

// delete email
exports.deleteEmail = async(req, res)=>{
  const jobs = agenda.jobs({_id: req.params.id});
  const job = jobs[0];
  if (job.attrs.data.userId !== req.userId){
    return res.status(400).json({'Not allowed!'});
  }
  try{
    await job.remove();
    await job.save();
  }
  catch(err){
    console.log(err);
  }
}

// edit email
exports.editEmail = async(req, res)=>{
  const jobs = agenda.jobs({_id: req.params.id});
  const job = jobs[0];
  if (job.attrs.data.userId !== req.userId){
    return res.status(400).json({'Not allowed!'});
  }
  try{
    const{body, to} = req.body;
    await job.attrs.data.body = body;
    await job.attrs.data.to = to;
    await job.save();
  }
  catch(err){
    console.log(err);
  }
}


const invoiceSchema = new mongoose.Schema({
  userId:{type: mongoose.Schema.Type.ObjectId, ref:'User'},
  clientId:{type: mongoose.Schema.Type.ObjectId, ref:'Client'},
  item:[{describtion: String, quantity: Number, price: Number}],
  total:{type: Number},
  tax:{type: Number},
  dueDate:{type: Date},
  createdAt:{type: Date, default:Date.now},
  payStatus:{type:String, enum:['pending','successful','unsuccessful'], default:'pending'}
  status:{type:String, enum:['sent','draft','none'], default:'none'} 
});

module.exports= mongoose.model('Invoice', invoiceSchema);
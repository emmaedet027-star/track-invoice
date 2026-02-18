const clientSchema = new mongoose.Schema({
  userId:{type: mongoose.Schema.Type.ObjectId, ref:'User'},
  name:{type: String, required:true},
  email:{type: String, required:true},
  address:{type:String},
  tasktype:{type: String},
  status:{type: String, enum['active', 'completed', 'paused'], default: 'active'}
});

module.exports= mongoose.model('client', clientSchema);
const userSchema = new mongoose.Schema({
  name:{type: String, required:true},
  email:{type: String, required:true, unique:true },
  password:{type: String, required:true},
  createdAt:{type: Date, default:Date.now},
  subscribtion:{type:String, enum:['free','paid'], default:'free'},
  usage:{invoicesCreated:{type: Number, default:0}, emailsSent:{type: Number, default:0},clientsCreated:{type: Number, default:0}} 
});

module.exports= mongoose.model('User', userSchema);
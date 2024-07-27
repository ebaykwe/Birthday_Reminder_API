import mongoose from'mongoose';

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  dateOfBirth: { 
    type: Date, 
    required: true 
},
});

export default mongoose.model('User', userSchema);

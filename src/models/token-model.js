import mongoose, { Schema } from "mongoose";

const TokenSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  refreshToken: {
    type: String,
    required: true
  },
});

const Token = new mongoose.model("Token", UserSchema);
export default Token
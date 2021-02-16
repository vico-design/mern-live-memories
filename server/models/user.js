import mongoose from "mongoose";

//A Mongoose schema defines the structure of the document, default values, validators, etc.,
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

// Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

export default mongoose.model("User", userSchema);

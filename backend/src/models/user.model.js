import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      reuqired: true,
      unique: true,
    },
    fullName: {
      type: String,
      reuqired: true,
    },
    password: {
      type: String,
      reuqired: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      deault: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
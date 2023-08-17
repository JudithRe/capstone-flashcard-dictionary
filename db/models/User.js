import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true, "Account already exists"],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Your password must be at least 6 characters long"],
  },
  role: {
    type: String,
    default: "user",
    enum: {
      values: ["user", "admin"],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  lastStreakUpdate: {
    type: Date,
    default: Date.now,
  },

  streak: {
    type: Number,
    default: 0,
  },
});

// Encryption
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

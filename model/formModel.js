import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: "John",
      required: true,
    },
    lastName: {
      type: String,
      default: "Doe",
      required: true,
    },
    mobileNumber: {
      type: String,
      default: "0000000000",
      required: true,
    },
    emailAddress: {
      type: String,
      default: "default@example.com",
      required: true,
    },
    socialMediaLink: {
      type: String,
      required: true,
    },
    areaOfExpertise: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    certificate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

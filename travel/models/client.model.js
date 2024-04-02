import { Schema, model } from "mongoose";

const clientSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

export const Client = model("Client", clientSchema);

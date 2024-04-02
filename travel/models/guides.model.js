import { Schema, model } from "mongoose";

const destinationSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    twitterLink: {
      type: String,
      required: true,
    },
    facebookLink: {
      type: String,
      required: true,
    },
    instagramLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Guide = new model("Guide", destinationSchema);

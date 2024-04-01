import { Schema, model } from "mongoose";

const destinationSchema = new Schema(
  {
    countryName: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Destination = model("Destination", destinationSchema);

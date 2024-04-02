import { Schema, model } from "mongoose";

const testimonialSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
export const Testimonial = model("Testimonial", testimonialSchema);

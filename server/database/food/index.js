import mongoose from "mongoose";


const FoodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    isVeg: { type: Boolean, required: true },
    isContainsEgg: { type: Boolean, required: true },
    category: { type: String, required: true },
    photos: {
        type: mongoose.Type.ObjectId,
        ref: "Images",
    },
    price: { type: Number, default: 150, required: true },
    addOns: [
      {
        type: mongoose.Type.ObjectId,
        ref: "Foods",
      }
    ],

    restaurant: {
        type: mongoose.Type.ObjectId,
        ref: "Restaurents",
        required: true,
    }
  },
  {
   timestamps: true,
  }
);

export const FoodModel = mongoose.model("Foods", FoodSchema);
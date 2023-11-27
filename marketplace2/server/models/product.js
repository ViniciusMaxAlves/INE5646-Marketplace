import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    sale: {
      type: Boolean,
      required: false,
      default: true,
    },
    exchange: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model('Product', productSchema);
import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    sale: {
      type: Boolean,
      default: false,
    },
    exchange: {
        type: Boolean,
        default: false,
      },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model('Product', productSchema);
import express from 'express';
import { Product } from '../models/product.js';
const router = express.Router();


router.post('/', async (request, response) => {
  try {

    console.log(request.body)
    const newProduct = {
      name: request.body.name,
      description: request.body.description,
      price: request.body.price,
      sale: request.body.sale,
      exchange: request.body.exchange,
    }
    const product = await Product.create(newProduct);
    return response.status(200).send(product);

  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})

router.put('/', async (request, response) => {
  try {

    const newProduct = {
      name: request.body.name,
      description: request.body.description,
      price: request.body.price,
      sale: request.body.sale,
      exchange: request.body.exchange,
      _id: request.body.id,
    }
    const product = await Product.updateOne(newProduct);
    return response.status(200).send(product);

  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})


router.get('/', async (request, response) => {
  try {

    const newProduct = {
      name: request.body.name,
      description: request.body.description,
      price: request.body.price,
      sale: request.body.sale,
      exchange: request.body.exchange,
      _id: request.body.id,
    }
    const products = await Product.find({});
    return response.status(200).send(products);

  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})



router.delete('/', async (request, response) => {
  try {

    const products = await Product.deleteMany({});
    return response.status(200).send(products);

  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})

export default router;

import express from 'express';
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = express.Router();

//register
router.post('/register', async (request, response) => {
  try {
    //TODO CHANGE
    if (
      !request.body.name ||
      !request.body.password ||
      !request.body.email
    ) {
      return response.status(400).send({
        message: 'Send all required fields: name, email, password',
      });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(request.body.password, salt);

    const newUser = {
      name: request.body.name,
      email: request.body.email,
      password: passwordHash,
    };
    const user = await User.create(newUser);

    return response.status(201).send(user);

  } catch(error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})
//login
router.post('/login', async (request, response) => {
  //TODO CHANGE
  console.log('login', request.body);
  try {
    if (
      !request.body.name ||
      !request.body.password ||
      !request.body.email
    ) {
      return response.status(400).send({
        message: 'Send all required fields: name, email, password',
      });
    }

    const user = await User.findOne({email: request.body.email});
    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    const checkPassword = await await bcrypt.compare(request.body.password, user.password);
    if (!checkPassword) {
      return response.status(400).json({ message: 'Wrong password' });
    }

    try {
      //TODO fix .env secret
      const secret = 'bc9fe94b3387d593047eed60bb1f206c3481258b7b41da0c97f4cc95793f8c1b';

      const token = jwt.sign({id: user._id,},secret);
  
      response.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
    } catch (error) {
      response.status(500).json({ msg: error.message });
    }


  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})

// Route for Get All User from database
router.get('/', async (request, response) => {
  try {
    const users = await User.find({});

    return response.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One User from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const user = await User.findById(id);

    return response.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a User
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.password 
    ) {
      return response.status(400).send({
        message: 'Send all required fields: name, password',
      });
    }

    const { id } = request.params;

    const result = await User.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(200).send({ message: 'User updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a User
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


export default router;
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../schema/user.js';

// Controller for user login

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user by email
    const user = await User.findOne({ email }).populate("inWishList").populate("inBasket");
    // If user not found
    if (!user) {
      return res.status(404).send('User not found');
    }
    // Compare passwords
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).send('Invalid password');
    }
    // If user is found and password is correct, create a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, 'secret_key', {
      expiresIn: '4h' // Token expires in 1 hour
    });
    // res.status(200).json({ token });
    res.send(user)
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// Controller for user registration
export const registerUser = async (req, res) => {
  try {
    const { name, surname, number, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, surname, number, email, password: hashedPassword, role });
    await user.save();
    // res.status(201).send('User registered successfully');
    res.send(user)
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// Controller for editing user information
export const editUser = async (req, res) => {
  try {
    const { id } = req.params; // Assuming userId is passed in the request parameters
    const { name, surname, number, email, password, role } = req.body;

    // Find the user by userId
    const user = await User.findById(id).populate("inWishList").populate("inBasket");

    // If user not found
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Update user fields
    if (name) user.name = name;
    if (surname) user.surname = surname;
    if (number) user.number = number;
    if (email) user.email = email;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }
    if (role) user.role = role;

    // Save the updated user
    await user.save();

    res.status(200).send('User updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// Controller for getting user by ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params; // Assuming userId is passed in the request parameters

    // Find the user by userId
    const user = await User.findById(id).populate("inWishList").populate("inBasket");

    // If user not found
    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Controller for getting all users
export const getAllUsers = async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find().populate("inWishList").populate("inBasket");

    // If no users found
    if (!users || users.length === 0) {
      return res.status(404).send('No users found');
    }

    // Send the list of users in the response
    res.status(200).json(users);
  } catch (error) {
    // Handle any errors
    res.status(500).send(error.message);
  }
};

export const addToWishlist = async (req, res) => {
  const userId = req.params.id;
  const eventId = req.body.eventId;

  try {
    // Check if both user and event exist
    const user = await User.findById(userId);
    const event = await Event.findById(eventId);

    if (!user || !event) {
      return res.status(404).json({ message: 'User or event not found' });
    }

    // Add the event to the user's wishlist
    user.inWishList.push(eventId);
    await user.save();

    res.status(200).json({ message: 'Event added to wishlist successfully' });
  } catch (error) {
    console.error('Error adding event to wishlist:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller function to add an event to the user's basket
export const addToBasket = async (req, res) => {
  const userId = req.params.id;
  const eventId = req.body.eventId;

  try {
    // Check if both user and event exist
    const user = await User.findById(userId);
    const event = await Event.findById(eventId);

    if (!user || !event) {
      return res.status(404).json({ message: 'User or event not found' });
    }

    // Add the event to the user's basket
    user.inBasket.push(eventId);
    await user.save();

    res.status(200).json({ message: 'Event added to basket successfully' });
  } catch (error) {
    console.error('Error adding event to basket:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

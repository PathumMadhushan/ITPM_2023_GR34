const express = require("express");
const { registerUser, loginUser, findUser, getUsers } = require("../Controllers/userController");

const router = express.Router();

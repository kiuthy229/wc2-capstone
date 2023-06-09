"use strict";

const express = require("express");
const config = require("./config");
const cors = require("cors");
const bodyParser = require("body-parser");
const ticketController = require("./controllers/ticketController");
const userController = require("./controllers/userController");
const { buyTicket } = require("./data/tickets");

const { getTickets, getTicketById, createTicket } = ticketController;
const {
  getUsers,
  getUserById,
  createUser,
  loginToUserAccount,
  updateUserPassword,
} = userController;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(config.port, () =>
  console.log("Server is listening on http://localhost:" + config.port)
);

app.get("/tickets", getTickets);

app.get("/ticket/:id", getTicketById);

app.post("/tickets", createTicket);

app.put("/ticket/:id", buyTicket);

app.get("/users", getUsers);

app.get("/user/:id", getUserById);

app.post("/users", createUser);

app.post("/users/login", loginToUserAccount);

app.put("/user/:id", updateUserPassword);

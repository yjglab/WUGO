import express from "express";
// const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`listening on: http://localhost:${PORT}`);
// function handleListening() {
//   console.log(`listening on: http://localhost:${PORT}`);
// }

const handleHome = (req, res) => res.send("Hello from home");
// function handleHome(req, res) {
//   res.send("Hello from home");
// }

const handleProfile = (req, res) => res.send("You r on my profile");
// function handleProfile(req, res) {
//   res.send("You r on my profile");
// }

app.get("/", handleHome);

app.get("/profile", handleProfile);
app.listen(4000, handleListening);

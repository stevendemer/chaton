require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import helmet from "helmet";
import { signUp } from "./controllers/auth.controller";
import authRouter from "./routes/auth.route";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;
const connection = mongoose.connection;

app.use(express.json());
app.use(cors());
app.use(helmet());

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
  } catch (error) {
    console.log(error);
  }
};

connection.on("error", () => console.log("Error: "));
connection.once("connection", () => console.log("Connected !"));

connectionDB();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(authRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

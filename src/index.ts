import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(
  cors({
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
const server = http.createServer();
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const MONGOURL =
  "mongodb+srv://dibkb:dibkb@cluster0.l9ccml4.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(MONGOURL);
mongoose.connection.on("error", (error: Error) => console.log(error));

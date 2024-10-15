import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

const app = express();
dotenv.config();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Server is running");
});

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});

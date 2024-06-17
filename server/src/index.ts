import express,{ Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json()); 
app.use(cors());
require('dotenv').config();

const mongoURI: string = `${process.env.MONGO_URI}`;

console.log("Attempting to connect to MongoDB...");

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED to MongoDB...🍃🦧"))
    .catch((err) => console.error("Failed to connect to MongoDB 🚨: ", err)
);

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server running on PORT ${port} 📟...`);
})


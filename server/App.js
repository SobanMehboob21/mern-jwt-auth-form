import express from "express";
import cors from "cors";
import UserRouter from '../server/routes/user.route.js'

const app = express();


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is working ");
});

app.use("/user",UserRouter)

export default app;

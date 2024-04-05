import express, { Request, Response } from "express";
import { router } from './routes/authRoute';
import { testDbConnection } from "./DB";
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());

testDbConnection();

app.get("/", (req: Request, res: Response) => {
  res.send("Jai Siya Ram");
});

app.use(router);

app.listen(3000, () => {
  console.log("Live on: http://localhost:3000");
});

import cors from "cors";
import express from "express";
import expressWs from "express-ws";
import { ActiveConnections } from "./type";

const app = express();

expressWs(app);
const port = 8000;

app.use(cors());

const router = express.Router();


app.use(router);

app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});

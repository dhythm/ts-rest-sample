import express from "express";
import cors from "cors";
import { createExpressEndpoints, initServer } from "@ts-rest/express";
import { contract } from "../client/contract";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const s = initServer();

const router = s.router(contract, {
  getPost: async ({ params: { id } }) => {
    const post = {
      id,
      title: "",
      body: "",
    };
    return {
      status: 200,
      body: post,
    };
  },
  createPost: async ({ body }) => {
    const response = {
      id: "1",
      title: body.title,
      body: body.body,
    };
    return {
      status: 201,
      body: response,
    };
  },
});

createExpressEndpoints(contract, router, app);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

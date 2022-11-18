import express from "express";
import { dataMock } from "./mock";
const app = express();
app.get("/cards/:cardNumber/invoices", function (req, res) {
  console.log(dataMock);
  res.json({
    total: 1000,
  });
});
app.listen(3000);

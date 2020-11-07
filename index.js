const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://psh9408p:pksd1993@cluster0.t1xoq.mongodb.net/Cluster0?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!asdasd");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} asdsad`);
});

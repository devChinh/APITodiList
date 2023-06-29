const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

const routerTodo = require("./routes/todoRouter");

const app = express();

const db = require("./config/db");
db.connect();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(cors());

app.use(morgan("common"));

app.use("/api/todolist", routerTodo);

app.listen(process.env.PORT, () => {
  console.log("============= port", port);
});


//CSS
// font-weight: bold;
// }
// .underline {
//     text-decoration: underline;
// }


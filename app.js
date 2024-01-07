const express = require("express");
require("dotenv").config();
const port = process.env.PORT;

const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", router);
require("./routes/routes")(router);
app.listen(port, () => {
  console.log(`app is runnging on ${port}`);
});

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("Develop/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });


// routes
app.use(require("./Develop/src/routes/api-routes"));
app.use(require("./Develop/src/routes/view-routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

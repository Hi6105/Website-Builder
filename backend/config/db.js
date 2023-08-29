const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectDb = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

module.exports = connectDb;

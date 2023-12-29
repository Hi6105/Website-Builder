const mongoose = require("mongoose");
const uri =
  "mongodb+srv://hvishwakarma821:gXMrzW3mbMA4PcV0@cluster0.dxotk0z.mongodb.net/?retryWrites=true&w=majority";

const connectDb = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log(`database connection successful`);
    })
    .catch((err) => {
      console.log(`unsuccessful connection`);
    });
};

module.exports = connectDb;

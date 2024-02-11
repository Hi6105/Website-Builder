const mongoose = require("mongoose");

const Postdata = new mongoose.Schema({
  blogdata: {
    type: String,
    required: true,
  },
});

const blog = mongoose.model("blog", Postdata);

module.exports = blog;

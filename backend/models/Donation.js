const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  websiteName: {
    type: String,
    required: true,
  },
  personName: {
    type: String,
    required: true,
  },
  personProfile: {
    type: File,
    required: false,
  },
});

const donation = mongoose.model("donation", donationSchema);

module.exports = donation;

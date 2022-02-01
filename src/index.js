const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.model(
  "Configuration",
  new Schema({
    key: String,
    value: Schema.Types.Mixed,
    type: String,
  })
);

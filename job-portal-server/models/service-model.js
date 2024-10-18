const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  service: {
    type: String,
  },
  description: {
    type: String,
  },

  price: {
    type: String,
  },

  provider: {
    type: String,
  },
});

const Service=new model("Service",serviceSchema);

module.exports=Service;
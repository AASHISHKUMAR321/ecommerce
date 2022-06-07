const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    title: { type: String, required: true },
    image: { type: String },
    price: { type: Number },
    size: { type: String }

})

module.exports = mongoose.model("products", productSchema);
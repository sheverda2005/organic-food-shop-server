const {Schema, model} = require("mongoose")

const product = new Schema({
    productClass: {
        type: String,
        require: true,
        unique: false
    },
    img: {
        type: String,
        require: true,
        unique: false
    },
    productName: {
        type: String,
        require: true,
        unique: false
    },
    price: {
        type: String,
        require: true,
        unique: false
    },
    rating: {
        type: Number,
        require: true,
        unique: false
    },
    detailInfo: {
        type: String,
        require: true,
        unique: false
    },
    productDescription: {
        type: String,
        require: true,
        unique: false
    },
    additionalInfo: {
        type: String,
        require: true,
        unique: false
    }
})

module.exports = model("Product", product)
const { Schema, model } = require("mongoose");



const expert = new Schema({
    img: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    work: {
        type: String,
        require: true
    },
    facebook: {
        type: String,
        require: false
    },
    twitter: {
        type: String,
        require: false
    },
    instagram: {
        type: String,
        require: false
    },
})


module.exports = model("Expert", expert)
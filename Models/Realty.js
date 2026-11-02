import mongoose from "mongoose";

const realtySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Название обязательно!"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Цена обязательна!"],
        min: 0
    },
    city: {
        type: String,
        required: [true, "Город обязателен!"],
        trim: true
    },
    address: {
        type: String,
        required: [true, "Адрес обязательно!"],
        trim: true
    },
    floors: {
        type: Number,
        required: [true, "Этаж обязательно!"],
        min: 0
    },
    rooms: {
        type: Number,
        required: [true, "Кол-во комнат обязательно!"],
        min: 0
    }
})

export default mongoose.model("Realty", realtySchema);
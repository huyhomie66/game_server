const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const connectDB = () => {
    try {
        mongoose.set("useCreateIndex", true);
        mongoose.connect(
            process.env.DATABASE_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
            .then(() => console.log("connect DB sucessfully"))
    } catch (error) {
        console.log(`Error connect DB: ${error.message}`);
    }

    // mongoose.Promise = global.Promise;
    // mongoose.connect('mongodb://localhost:27017/mtaboutique')
};
module.exports = connectDB;
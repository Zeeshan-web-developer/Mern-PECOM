const mongoose = require('mongoose');
const Url = "mongodb+srv://zeeshan:zeeshan@cluster0.cfw51.mongodb.net/mernStackPizza";
const db = async () => {
    try {
        await mongoose.connect(Url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = db;
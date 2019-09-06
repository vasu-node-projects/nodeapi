var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tutorialschema = new Schema({
    FirstName: {
        type: String,
        require: true,
        // unique: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String
    },
    PhoneNumber: {
        type: String
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
var Tutorials = mongoose.model("Registration", tutorialschema);
module.exports = Tutorials;

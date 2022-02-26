const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    expense: {
        type: String,
        required: true
    }, 
    amount: {
        type: Number,
        required: true
    },
    toexpense: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Expense", expenseSchema);
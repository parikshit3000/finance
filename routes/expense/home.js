const path = require("path");
const Expense = require("../../models/Expense");

const home = async (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));

    try {
        const newExpense = await Expense.findById
    } catch (err) {
      return res.status(500).json(err);
    }
}

module.exports = home;
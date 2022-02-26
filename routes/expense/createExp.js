const Expense = require("../../models/Expense");
const path = require("path");

const createExpense = async (req, res) => {
  console.log("hello");
  const body = req.body;
  console.log(body);

  try {
    const newExpense = new Expense({
      ...body,
    });
    await newExpense.save();

    res.status(200).send({
      message: "success",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports = createExpense;

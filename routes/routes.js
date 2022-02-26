const router = require("express").Router();

const createExpense = require("./expense/createExp");
const createTable = require("./expense/createTab");
const home = require("./expense/home");

// Home page
router.get("/", home);

// Create expense
router.post("/post", createExpense);

// router.get("/get", (req, res) => {
//     res.send("Hello World");
// });

// Table
// router.get("/exp", createTable);

module.exports = router;
const path = require("path");

const createTable = (req, res) => {
    res.sendFile(path.join(__dirname, "../../table.html"));
}

module.exports = createTable;
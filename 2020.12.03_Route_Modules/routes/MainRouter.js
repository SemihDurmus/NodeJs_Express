const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("main", { name: req.query.name });
});

router.post("/", (req, res) => {
  res.send("post");
});

module.exports = router;

// exports.getMain = (req, res) => {
//   console.log("Get request to /");
//   res.send("Respond sent");
//   res.send({ id: 0, name: "Clarus" });
//   res.sendFile(path.join(__dirname, "about.html"));
//   res.render("main");
// };

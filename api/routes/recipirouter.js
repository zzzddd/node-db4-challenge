const router = require("express").Router();

const Recipis = require("../helper/recipimodel");

router.get("/", (req, res) => {
  recipis.find()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;

const router = require("express").Router();
const User = require("../models/user");

// getAll user

router.get("/all", async (req, res) => {
  try {
    const user = await User.find();
    res.send(user)
  } catch (err) {
    res.send(err);
  }
});
//post

router.post("/save", async (req, res) => {
  const newuser = await new User({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email : req.body.Email,
    Mobile: req.body.Mobile,
    Adress1: req.body.Adress1,
    Adress2 : req.body.Adress2,
    country : req.body.country,
    State : req.body.State

  });
  try {
    const user = await newuser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, { $set: req.body });

    res.status(200).json("the user has been updated ");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json("the user has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const User = require("../../models").User;
const router = require("express").Router();

router.get("/", (req, res, next) => {
  User.findAll().then(users => {
    return res.status(200).json(
      JSON.stringify( users );
    );
  });
});

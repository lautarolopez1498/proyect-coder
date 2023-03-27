const { Router } = require("express");
const { generateToken } = require("../utils/jwt");

const router = Router();

const USERS = [];

router.post("/login", (req, res) => {
  const username = req.body.username;

  const index = USERS.findIndex((user) => user.username == username);

  if (index == -1) {
    res.status(404).send({ error: "usuario no encontrado" });
  } else {
    const token = generateToken({ index });
    res.send({
      msg: "Usuario encontrado",
      token
    });
  }
});

router.post("/register", (req, res) => {
  const user = req.body.user;
  const exist = USERS.findIndex((userArray) => userArray == user);

  if (exist == -1) {
    USERS.push(user);
    res.send({
      msg: "register",
    });
  } else {
    res.status(403).send({ error: "Usuario existente" });
  }
});

module.exports = router;

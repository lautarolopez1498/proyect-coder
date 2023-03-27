const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "PASSWORDPARAPROYECTOFINALDECODER";

const generateToken = (payload) => {
  const token = jwt.sign({payload}, PRIVATE_KEY, { expiresIn: "3m" });
  return token;
};

const getPayload = (req, res, next) => {
  const headerAuth = req.headers.authorization;

  if (!headerAuth) {
    res.status(401).send({ error: "no se encontro token" });
  }

  const token = headerAuth.split(" ")[1];
  if (token) {
    jwt.verify(token, PRIVATE_KEY, (error, credential) => {
      if (error) {
        res.status(500).send({ error: "ocurrio un error inesperado", error });
      } else {
        req.payload = credential.payload;
        next();
      }
    });
  } else {
    res.status(401).send({ error: "no se encontro token" });
  }
};


module.exports = {
  generateToken,
  getPayload
}
const gatekeeper = (req, res, next) => {
  const pass = req.query.pass;
  if (pass === 'ferret') {
    next();
  } else {
    res.status(400).json({ message: 'invalid password'});
  }
};

const otherMW = (req, res, next) => {

}

module.exports = {
  gatekeeper: gatekeeper,
  otherMW: otherMW
};
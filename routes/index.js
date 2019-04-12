const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  return res.send({message: "Tudo certo com o get do index"});
});

router.post('/', (req, res) => {
  return res.send({message: "Tudo certo com o POST do index"});
});

module.exports = router;
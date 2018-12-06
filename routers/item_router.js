const express = require('express');

const router = express.Router();

// /api/items
router.get('/', (req, res) => {
  res.json({ items: [
    { name: 'coffee beans', s_id: 1},
    { name: 'more coffee beans', s_id: 1},
    { name: 'some tea', s_id: 3 },
    { name: 'chocolate syrup', s_id: 2 }
  ]});
});

router.post('/', (req, res) => {
  const item = req.body;
  res.status(201).json({ created: item });
});

module.exports = router;

// code end
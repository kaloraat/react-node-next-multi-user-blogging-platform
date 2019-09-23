const express = require('express');
const router = express.Router();
const { time } = require('../controllers/blog');

router.get('/', time);

module.exports = router;

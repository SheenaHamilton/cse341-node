const router = require('express').Router();
const proController = require('../controllers/lesson1')

router.get('/professional', proController.professionalRoute);

module.exports = router;
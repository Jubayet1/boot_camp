const express = require('express');
const { 
    showAllBootCamp,
    createBootCamp, 
    showSingleBootCamp, 
    UpdateBootCamp, 
    deleteBootCamp 
} = require('../Controllers/Controllers')
const router = express.Router();

router.route('/')
    .get(showAllBootCamp)
    .post(createBootCamp);

router.route('/:id')
    .get(showSingleBootCamp)
    .put(UpdateBootCamp)
    .delete(deleteBootCamp)

// exporting file 
module.exports = router;
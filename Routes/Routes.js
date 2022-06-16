const express = require('express');
const router = express.Route();


// show all bootcamps
router.get('/', (req, res) => {
    res.status(200).json({status: 'true', todo: "show all bootcamps"});
})

// show single bootcamps
router.get('/:id', (req, res) => {
    res.status(200).json({status: 'true', todo: `display ${req.params.id} bootcamp`});
})

// create a bootcamps
router.post('', (req, res) => {
    res.status(200).json({status: 'true', todo: "create new bootcamp"});
})

// update a bootcamps
router.put('/:id', (req, res) => {
    res.status(200).json({status: 'true', todo: `update ${req.params.id} bootcamp`});
})

// delete a bootcamps
router.delete('/:id', (req, res) => {
    res.status(200).json({status: 'true', todo: `delete ${req.params.id} bootcamp`});
})


// exporting file 
module.exports = router;
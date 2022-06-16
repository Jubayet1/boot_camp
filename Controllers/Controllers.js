
// GET (/api/v1/bootcamps)
//  show all bootcamps
exports.showAllBootCamp = (req, res, next) => {
    res.status(200).json({status: 'true', todo: "show all bootcamps"});
}

// POST (/api/v1/bootcamps)
//  create a bootcamp
exports.createBootCamp = (req, res, next) => {
    res.status(200).json({status: 'true', todo: "create new bootcamp"});
}

// GET (/api/v1/bootcamps/:id)
//  show single bootcamp
exports.showSingleBootCamp = (req, res, next) => {
    res.status(200).json({status: 'true', todo: `display ${req.params.id} bootcamp`});
}

// PUT (/api/v1/bootcamps/:id)
//  update single bootcamp
exports.UpdateBootCamp = (req, res, next) => {
    res.status(200).json({status: 'true', todo: `update ${req.params.id} bootcamp`});
}

// DELETE (/api/v1/bootcamps/:id)
//  delete single bootcamp
exports.deleteBootCamp = (req, res, next) => {
    res.status(200).json({status: 'true', todo: `delete ${req.params.id} bootcamp`});
}
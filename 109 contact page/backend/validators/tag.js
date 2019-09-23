const { check } = require('express-validator');

exports.createTagValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
];

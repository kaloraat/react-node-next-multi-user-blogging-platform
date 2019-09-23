const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        slug: {
            type: String,
            unique: true,
            index: true
        }
    },
    { timestamp: true }
);

module.exports = mongoose.model('Category', categorySchema);

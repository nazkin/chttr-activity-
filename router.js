const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.json({
        message: 'Everything is handy dandy'
    });
});

module.exports = router;

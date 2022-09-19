const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) =>{
    res.send('De lo que te pierde ');
})

module.exports = router;
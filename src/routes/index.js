const { Router } = require('express');
const router = Router();



router.get('/test', (req, res) => {
    const data = {
        "name": "Carlos",
        "web": "carlosdelrio.es"
    };

    res.json(data);

});

module.exports = router;
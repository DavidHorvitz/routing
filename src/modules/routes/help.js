const express = require(`express`);
const router = express.Router();
// const fs = require(`fs`);
// const path = require(`path`);

// router.get(`/about-me`, (req, res) => {
//     res.send(`About me page`);
// });


router.get('/how-to-use', (req, res) => {
  
    res.send('How to use');
});

router.get('/about-me', (req, res) => {
    res.send('about me');
});
module.exports = router;







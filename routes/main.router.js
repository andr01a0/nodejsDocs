const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('layouts/main.layout.render', {
    interpolation: {
      strings: {
        title: 'Home Page'
      },
      files: {
        stylesheets: 'components/stylesheets.component.render',
        navbar: 'components/navbar.component.render',
        page: 'components/index.component.render',
        scripts: 'components/scripts.component.render',
      }
    }
  })
})

module.exports = router;
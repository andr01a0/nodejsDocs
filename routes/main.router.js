const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('layouts/main.layout.render', {
    interpolation: {
      files: {
        stylesheets: 'components/stylesheets.component.render',
        navbar: 'components/navbar.component.render',
        container: 'components/container.component.render',
        footer: 'components/footer.component.render',
        scripts: 'components/scripts.component.render',
        content: 'components/index.content.component.render'
      }
    }
  })
})

router.get('/command-line', function (req, res) {
  res.render('layouts/main.layout.render', {
    interpolation: {
      files: {
        stylesheets: 'components/stylesheets.component.render',
        navbar: 'components/navbar.component.render',
        container: 'components/container.component.render',
        footer: 'components/footer.component.render',
        scripts: 'components/scripts.component.render',
        content: 'components/commandline.content.component.render',
      }
    }
  })
})

router.get('/tools', function (req, res) {
  res.render('layouts/main.layout.render', {
    interpolation: {
      files: {
        stylesheets: 'components/stylesheets.component.render',
        navbar: 'components/navbar.component.render',
        container: 'components/container.component.render',
        footer: 'components/footer.component.render',
        scripts: 'components/scripts.component.render',
        content: 'components/tools.content.component.render'
      }
    }
  })
})

router.get('/nodejs', function (req, res) {
  res.render('layouts/main.layout.render', {
    interpolation: {
      files: {
        stylesheets: 'components/stylesheets.component.render',
        navbar: 'components/navbar.component.render',
        container: 'components/container.component.render',
        footer: 'components/footer.component.render',
        scripts: 'components/scripts.component.render',
        content: 'components/nodejs.content.component.render'
      }
    }
  })
})

module.exports = router;
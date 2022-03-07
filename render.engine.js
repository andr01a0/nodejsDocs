const fs = require('fs')

module.exports = (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    let rendered = content.toString()
    const files = options.interpolation.files
    const numberKeys = Object.keys(files).length
    let keyCount = 0
    Object.keys(files).forEach(file => {
      fs.readFile(`${options.settings.views}/${files[file]}`, (err, content) => {
        if (err) return callback(err)
        rendered = rendered.replaceAll(`{{${file}}}`, content.toString())
        keyCount++
        if(keyCount === numberKeys) {
          const strings = options.interpolation.strings
          Object.keys(strings).forEach(string => {
            rendered = rendered.replaceAll(`{{${string}}}`, strings[string])
          })
          return callback(null, rendered)
        }
      })
    })
  })
}
const fs = require('fs').promises
const path = require('path')
const isPreview = (process.env.APP_PREVIEW === 'true')

const outputFilename = path.join(__dirname, '../dist/_redirects')
const redirects = `
/* /200.html 200
`

if (isPreview) {
  fs.writeFile(outputFilename, redirects)
}

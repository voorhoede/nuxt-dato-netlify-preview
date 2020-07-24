const fs = require('fs').promises
const path = require('path')
const isPreview = (process.env.APP_PREVIEW === 'true')

const outputFilename = path.join(__dirname, '../dist/_headers')
const headers = `
/*
  Basic-Auth: preview:demo
`

if (isPreview) {
  fs.writeFile(outputFilename, headers)
}

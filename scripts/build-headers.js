const fs = require('fs').promises
const path = require('path')
require('dotenv').config()

const isPreview = (process.env.APP_PREVIEW === 'true')
const username = process.env.APP_PREVIEW_USERNAME
const password = process.env.APP_PREVIEW_PASSWORD
const outputFilename = path.join(__dirname, '../dist/_headers')

const headers = (username && password) ? `
/*
  Basic-Auth: ${username}:${password}
` : ''

if (isPreview) {
  fs.writeFile(outputFilename, headers)
}

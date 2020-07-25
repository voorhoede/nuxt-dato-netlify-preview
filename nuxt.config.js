const datoApiToken = process.env.DATO_API_TOKEN
const isPreview = (process.env.APP_PREVIEW === 'true')

console.log(`\n Preview Mode is ${isPreview ? 'ON' : 'OFF'} \n`)

export default {
  srcDir: 'src/',
  mode: 'universal',
  target: isPreview ? 'server' : 'static',
  generate: {
    crawler: !isPreview,
    devtools: isPreview,
    exclude: isPreview ? [/.*/] : [],
  },

  privateRuntimeConfig: {
    datoApiToken,
  },
  publicRuntimeConfig: {
    datoApiToken: isPreview ? datoApiToken : undefined,
    isPreview,
  },

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.graphql?$/,
        loader: 'webpack-graphql-loader',
      });
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  },

  plugins: [
    '~/plugins/graphql-request.js',
  ],
}

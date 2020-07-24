const isPreview = (process.env.APP_PREVIEW === 'true');
console.log({ isPreview })

export default {
  srcDir: 'src/',
  mode: 'universal',
  target: isPreview ? 'server' : 'static',
  generate: {
    crawler: !isPreview,
    devtools: isPreview,
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
    }
  },

  env: {
    DATO_API_TOKEN: process.env.DATO_API_TOKEN ,
    isPreview,
  },

  plugins: [
    '~/plugins/graphql-request.js',
  ],
}

# Nuxt Dato Netlify Preview

Setup for production and preview builds:

**production build**: 
- [x] full static Nuxt site (pages and data payloads)
- [x] loads published data from Dato CMS during build
- [x] bundles optimised for production
- [x] immutable caching of revisioned assets

**preview build**:
- [x] Nuxt single page app with latest data
- [x] loads draft and published data from Dato CMS during runtime
- [x] supports Vue devtools
- [x] basic auth password protection

## To do

- [ ] preview link per item in Dato CMS
- [ ] keep DATO_API_TOKEN out of production bundles (`app.[hash].js`) 

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Production build

```bash
# build for production and launch server
$ npm run build
$ npm run serve
```

## Preview build

```bash
# build for preview and launch server
$ APP_PREVIEW=true npm run build
$ npm run serve
```

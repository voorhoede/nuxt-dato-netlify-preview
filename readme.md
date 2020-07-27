# Nuxt Dato Netlify Preview

**Setup for production and preview builds for Nuxt.js apps powered by Dato CMS and hosted on Netlify.**

Why? Production builds are designed to give the best user experience for end users.
But content editors don't want to wait for a full production build just to preview their content changes.
So this setup adds a preview environment which always loads the latest (draft and published) content during runtime.


## Features

**production build**: 
- full static Nuxt site (pages and data payloads)
- loads published data from Dato CMS during build
- bundles optimised for production
- immutable caching of revisioned assets
- builds on changes on `master` branch
- can be triggered by editors in CMS
- can be visited by editors via link in CMS

**preview build**:
- Nuxt single page app with latest data
- loads latest draft and published data from Dato CMS during runtime
- supports Vue devtools
- basic auth password protection (so only editors can view)
- builds on changes on `preview` branch
- `preview` branch is automatically updated after a successful deploy of the `master` branch
- can be triggered by editors in CMS (but most changes don't need new build)
- can be visited by editors via link in CMS (link contains basic auth credentials)

**development mode**:
- regular Nuxt development setup
- uses Netlify Dev so configuration (headers, redirects, functions) is equal deployed build
- loads latest draft and published data from Dato CMS (same as preview build)


## To do

- [ ] preview link per item in Dato CMS (use or make plugin?)


## How it works

- [`netlify.toml`](netlify.toml) is configured to set environment variable `APP_PREVIEW` based on branch.
- [`nuxt.config.js`](nuxt.config.js) settings are based on environment variable (`APP_PREVIEW`).
- [GraphQL request plugin](src/plugins/graphql-request.js) switches GraphQL endpoint based on environment variable (`APP_PREVIEW`).
- Password protection is set based on environment variables (`APP_PREVIEW`, `APP_PREVIEW_USERNAME` and `APP_PREVIEW_PASSWORD`).
- `preview` branch is synced automatically with `master` branch - after successful production deploy - using a [postbuild script](scripts/sync-preview-branch). This requires a [GitHub deploy key](https://docs.github.com/en/developers/overview/managing-deploy-keys) set as `GITHUB_SSH_KEY` and a `GIT_ORIGIN_URL`.


## Setup

```bash
# install dependencies
npm install
```

### Development

```bash
# serve with hot reload at localhost:3000
npm run dev
```

### Production build

```bash
# build for production and launch server
npm run build
npm start
```

### Preview build

```bash
# build for preview and launch server
APP_PREVIEW=true npm run build
npm start
```

const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/var/docker/projectJs/yuanqingfei2.github.io/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/var/docker/projectJs/yuanqingfei2.github.io/src/templates/blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/var/docker/projectJs/yuanqingfei2.github.io/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/var/docker/projectJs/yuanqingfei2.github.io/src/pages/index.js")))
}


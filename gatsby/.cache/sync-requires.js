const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/shunnpyaepyaeaung/Desktop/Projects/slick-slice/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-beer-js": hot(preferDefault(require("/Users/shunnpyaepyaeaung/Desktop/Projects/slick-slice/gatsby/src/pages/beer.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/shunnpyaepyaeaung/Desktop/Projects/slick-slice/gatsby/src/pages/index.js"))),
  "component---src-pages-slicemasters-js": hot(preferDefault(require("/Users/shunnpyaepyaeaung/Desktop/Projects/slick-slice/gatsby/src/pages/slicemasters.js")))
}


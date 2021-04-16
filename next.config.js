
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['4PEQuNDw3uCdR3beWA2Ndi'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  
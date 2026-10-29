// twikoo-vercel 2.0 exports the handler as `.default`; 1.x exported it directly.
const vercel = require('twikoo-vercel')

module.exports = vercel.default ?? vercel
module.exports.default = module.exports

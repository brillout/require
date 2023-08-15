const { createRequire } = require('module')
const ctx = __filename
console.log('__filename', ctx)
const req = createRequire(ctx)
req('node-fetch')

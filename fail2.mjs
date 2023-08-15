import { createRequire } from 'module'
const ctx = import.meta.url
console.log('import.meta.url', ctx)
const require = createRequire(ctx)
require('node-fetch')

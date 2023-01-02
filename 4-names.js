const names = ['aksh', 'krtk', 'hrsi']

const sayHi = require('./3-module')

module.exports = {names}
console.log(module)

names.forEach(sayHi)
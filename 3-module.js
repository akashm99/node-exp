const names = require('./4-names')


const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

// console.log(names)
names.names.forEach(sayHi)

module.exports = sayHi
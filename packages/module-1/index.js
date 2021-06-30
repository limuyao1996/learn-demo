const Vue = require('vue')

module.exports.module1 = function () {
    console.log('this is module1')
}

module.exports.sayHi = function () {
    console.log('Hi! module1')
}

module.exports.Vue = Vue;
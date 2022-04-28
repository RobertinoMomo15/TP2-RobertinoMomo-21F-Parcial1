import fs from 'fs'
import {miData} from '../src/data.js'

setTimeout(() => {
    console.log("Hola profe :D")
}, 7000);

console.log("Metodo sort")
console.log(miData.retSort())

console.log("Metodo Filter")
console.log(miData.retFilter())

console.log("Metodo forEach")
miData.retForEach()

console.log("Metodo Map")
console.log(miData.retMap())



fs.writeFileSync('./src/data.txt', 'Nuevo Texto')

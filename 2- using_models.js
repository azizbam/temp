// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

const names = require("./2-names")
const func = require("./2-functions")
const data = require("./2-anotherway")

console.log(data.car.name + " "+ data.car.color)
console.log(data.items + "\n")

func(names.name1)
func(names.name2)
func(names.name3 + "\n")







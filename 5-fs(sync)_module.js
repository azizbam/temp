const {readFileSync, writeFileSync} = require("fs")

// reading files 
const first = readFileSync("./content/first.txt", "utf8")
const sec = readFileSync("./content/sec.txt", "utf8")

console.log(first)
console.log(sec)

// now writing to files 
writeFileSync("./content/myfile.txt",
 "this is my file that i made, \nthese are the first and secound files:\n" + first +"\n"+ sec)

 // appending without over writing
 writeFileSync("./content/append.txt", "\ni made this line with node!!.",
 {flag:"a"}
 )


 
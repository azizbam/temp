const path = require("path")




const text_path =path.join("./content", "sub", "text.txt")
console.log(text_path)


const base = path.basename(text_path)
console.log(base)



// __dirname is the location of this javascript file 
// it's a global varible
const abslote_path = path.resolve(__dirname, "content", "sub", "text.txt" )
console.log(abslote_path)
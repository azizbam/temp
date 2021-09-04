const { readFile, writeFile } = require("fs")

readFile("./content/first.txt", "utf8", (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    console.log(first)
    readFile("./content/sec.txt", "utf8", (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const sec = result
        console.log(sec)
        writeFile("./content/myfile2.txt", "here is the result:\n"+ first +"___"+ sec, (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            const res = result
            console.log(res)
            
        })
    })
})
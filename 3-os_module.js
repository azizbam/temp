
const os = require("os")


const userinfo = (os.userInfo())
const cpu =(os.cpus()[0].model)

console.log( "------------------------- \n" + "user name: " + userinfo.username)
console.log( "cpu: " + cpu)


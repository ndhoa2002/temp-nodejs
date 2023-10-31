const os = require('os');
const path = require('path'); 
//info about current user
// console.log(os.userInfo())

//method return the system uptime in seconds
// console.log(`the system uptime is ${os.uptime()} seconds`)

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalmem: os.totalmem(),
//     freemem: os.freemem(),
// }
// console.log(currentOS)
console.log(path.sep)
//duong dan toi file
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)
//lay moi ten file 
const base = path.basename(filePath)
console.log(base)

const ab = path.resolve(__dirname, 'content', 'subfolder','test.txt')
console.log(ab)
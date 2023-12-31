const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)



const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt','utf8')
        const second = await readFilePromise('./content/second.txt','utf8')
        await writeFilePromise(
            './content/result-mind-grenade.txt',
            `this is awsome : ${first} ${second}`
        )
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}

start()

// getText('./content/first.txt')
//     .then((data)=> console.log(data))
//     .catch((err)=> console.log(err))

// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile('./content/first.txt','utf8',(err,data)=>{
//             if(err) {
//                 rejects(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }
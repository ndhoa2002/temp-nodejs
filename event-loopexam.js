const {readFile} = require('fs')
console.log('start the first task')
readFile('./content/first.txt','utf8',(error, data) => {
    if(error) {
        console.log(error)
        return
    }
    console.log(data)
    console.log('completed the task')
}) 
console.log('starting the next task')
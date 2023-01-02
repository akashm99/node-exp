// const os = require('os')

// console.log(os.userInfo())

// console.log(`The system uptime is ${os.uptime()}`)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }

// console.log(currentOS)

// const path = require('path')

// console.log(path.sep)

// const filepath = path.join('content', 'test.txt')
// console.log(filepath)
// const base = path.basename(filepath)

// const abs = path.resolve(__dirname, 'content', base)

// console.log(abs)


const fs = require('fs')

// const readF = fs.readFileSync('./content/test.txt', 'utf8')

// console.log(readF)

// fs.writeFileSync('./content/result-sync.txt', 
// `Here is the result: ${readF}, ${readF}`, {flag: 'a'})

// console.log(fs.readFileSync('./content/result-sync.txt', 'utf8'))

fs.readFile('./content/test.txt', 'utf-8', (err, result) => {
    if (err){
        console.log(err)
        return
    }
    fs.writeFile('./content/result-sync.txt',
    `Async result ${result}`, {flag : 'a'},
    (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
        
        fs.readFile('./content/result-sync.txt', 'utf-8',
        (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})
const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) =>  {
//     if(err) {
//         throw err
//     }
//     console.log(data)
// })

const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

// stream.on('data', (chunk) => {
//     console.log(chunk)

// })
// stream.on('end', () => {console.log('закінчили читати')})
// stream.on('open', () => {console.log('почали читати')})
// stream.on('error', (e) => {console.log(e)})

const writeableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))

for (let i = 0; i < 20; i++) {
    writeableStream.write(i + '\n')
}
writeableStream.end()
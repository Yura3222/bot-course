// const dotenv = require('dotenv')
// dotenv.config()

// console.log(process.argv)

// if(Math.random() > 0.5) {
//     while(true){

//     }
// } else {
//     console.log('Finish prog')
//     process.exit()
// }

// const path = require('path')

// console.log(path.join(__dirname, 'first', 'second', 'third'))
// console.log(path.join(__dirname, '..'))

// const fullPath = path.resolve( 'first', 'second', 'third')
// console.log('Parcing', path.parse(fullPath))

// // ---------------------------------

// const siteURL = 'http://localhost:8080/users?id=5123'

// const url = new URL(siteURL)

// console.log(url)

const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const parseURL = require('./framework/parseURL')
const mongoose = require('mongoose')

const app = new Application()


app.use(jsonParser)
app.use(parseURL('http://localhost:5000'))

app.addRouter(userRouter)

const start = async () => {
    try {
         await mongoose.connect()
         app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))

    } catch (e) {
        console.log(e)
    }
}

start()



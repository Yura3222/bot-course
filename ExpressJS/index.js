import express from 'express';
import router from "./router.js"
import  {connectToMongoDB, disconnectFromMongoDB} from './MongoConnect.js'
import fileupload from "express-fileupload"


const PORT = 5000;
const app = express();
app.use(express.json({}))
app.use(express.static('static'))
app.use(fileupload())
app.use('/api', router)
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT); 
})

connectToMongoDB()

import {Router} from "express"
import PostControllerJs from "./PostController.js"

const router = new Router()

router.post('/posts', PostControllerJs.create )
router.get('/posts',PostControllerJs.getAll)
router.get('/posts/:id', PostControllerJs.getOne)
router.put('/posts', PostControllerJs.update)
router.delete('/posts/:id', PostControllerJs.delete)

export default router
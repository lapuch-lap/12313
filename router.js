import Router from 'express'
import Post from '/Post.js'
const Router = new Router()

Router.post('/posts', async (req,res) => {
    try {
    const {author, title, content, picture} = req.body
    const Post = await Post.create({author, title, content, picture})
    res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
})
router.get('/posts')
router.get('/posts/:id')
router.put('/posts')
router.delete('/posts/:id')

export default router;
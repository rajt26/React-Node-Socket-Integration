const Posts = require('../model/posts')

module.exports = {

    async create(req,res) {
        try {
            let params = req.body
            let posts = await Posts.create(params)
            req.io.sockets.emit('new_post',posts)
            return res.send(posts)
        } catch (error) {
            return res.status(400).json({ error: "error while to add post." });
        }
    },
    async getPosts(req,res) {
        try {
            let posts = await Posts.find()
            return res.send(posts)
        } catch (error) {
            return res.status(400).json({ error: "error while to get post." });
        }
    }
}
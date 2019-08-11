const express = require('express');
const routes = express.Router();
const DevController = require('./controllers/DevController')
const likes = require('./controllers/LikeController')
const dislikes = require('./controllers/DislikeController')

routes.get('/', (req, res) => {
   res.json({ ok: true })

})

routes.post('/devs', DevController.store)

routes.post('/devs/:devId/likes', likes.store)
routes.post('/devs/:devId/dislikes', dislikes.store)

routes.get('/devs', DevController.index)

module.exports = routes
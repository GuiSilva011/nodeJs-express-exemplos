import * as  express from 'express'


const app = express()

import userController from './controller/userController'

import postController from './controller/postController'

app.use('/post', postController)
app.use('/user', userController )



app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))


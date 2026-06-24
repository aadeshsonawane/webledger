import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const PostsController = () => import('#controllers/posts_controller')
const AuthController = () => import('#controllers/auth_controller')

router.post('/register', [AuthController, 'register'])
router.post('/login', [AuthController, 'login'])

router
  .group(() => {
    router.resource('posts', PostsController)
  })
  .use(middleware.auth())

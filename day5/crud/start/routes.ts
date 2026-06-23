/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
// import { controllers } from '#generated/controllers'

const PostsController = () => import('#controllers/posts_controller')

router.get('/', () => {
  return { hello: 'world' }
})

// router
//   .group(() => {
//     router
//       .group(() => {
//         router.post('signup', [controllers.NewAccount, 'store'])
//         router.post('login', [controllers.AccessTokens, 'store'])
//       })
//       .prefix('auth')
//       .as('auth')

//     router
//       .group(() => {
//         router.get('profile', [controllers.Profile, 'show'])
//         router.post('logout', [controllers.AccessTokens, 'destroy'])
//       })
//       .prefix('account')
//       .as('profile')
//       .use(middleware.auth())
//   })
//   .prefix('/api/v1')

//

router
  .group(() => {
    router.get('/', [PostsController, 'index'])
    router.get('/:id', [PostsController, 'show'])
    router.post('/', [PostsController, 'store'])
    router.put('/:id', [PostsController, 'update'])
    router.delete('/:id', [PostsController, 'destroy'])
  })
  .prefix('/posts')

// router.get('/posts', [PostsController, 'index'])

// router.get('/posts/:id', [PostsController, 'show'])

// router.post('/posts', [PostsController, 'store'])

// router.put('/posts/:id', [PostsController, 'update'])

// router.delete('/posts/:id', [PostsController, 'destroy'])

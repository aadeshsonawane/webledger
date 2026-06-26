import type { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'
import type User from '#models/user'

export default class PostsController {
  async index({ auth, response }: HttpContext) {
    //get all post
    const user = (await auth.authenticate()) as User
    const posts = await Post.query().where('user_id', user.id)
    return response.ok(posts)
  }

  async show({ params, auth, response }: HttpContext) {
    const user = (await auth.authenticate()) as User
    const post = await Post.query().where('id', params.id).where('user_id', user.id).first()
    if (!post) {
      return response.notFound({ message: 'Post not found' })
    }
    return response.ok(post)
  }

  async store({ request, auth, response }: HttpContext) {
    //create post
    const user = (await auth.authenticate()) as User
    const data = request.only(['title', 'content'])
    const post = await Post.create({
      ...data,
      userId: user.id,
    })
    return response.created(post)
  }

  async update({ params, request, auth, response }: HttpContext) {
    const user = (await auth.authenticate()) as User
    const post = await Post.query().where('id', params.id).where('user_id', user.id).first()
    if (!post) {
      return response.notFound({ message: 'Post not found' })
    }
    const data = request.only(['title', 'content'])
    post.merge(data)
    await post.save()
    return response.ok(post)
  }

  async destroy({ params, auth, response }: HttpContext) {
    const user = (await auth.authenticate()) as User
    const post = await Post.query().where('id', params.id).where('user_id', user.id).first()
    if (!post) {
      return response.notFound({ message: 'Post not found' })
    }
    await post.delete()
    return response.ok({ message: 'deleted' })
  }
}

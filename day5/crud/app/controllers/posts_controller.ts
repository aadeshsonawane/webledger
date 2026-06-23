// HttpContext import for request and response
import type { HttpContext } from '@adonisjs/core/http'

import Post from '#models/post'

export default class PostsController {
  //   all
  async index({ response }: HttpContext) {
    const posts = await Post.all()
    return response.ok(posts)
  }

  //   single
  async show({ params, response }: HttpContext) {
    const post = await Post.find(params.id)
    if (!post) {
      return response.notFound({ message: 'Not found' })
    }
    return response.ok(post)
  }

  //   create
  async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'content', 'author'])
    const post = await Post.create(data)
    return response.created(post)
  }

  //   update
  async update({ params, request, response }: HttpContext) {
    const post = await Post.find(params.id)
    if (!post) {
      return response.notFound({ message: 'not found' })
    }
    const data = request.only(['title', 'content', 'author'])
    post.merge(data)
    await post.save()
    return response.ok(post)
  }

  //   delete
  async destroy({ params, response }: HttpContext) {
    const post = await Post.find(params.id)
    if (!post) {
      return response.notFound({ message: 'not found' })
    }
    await post.delete()
    return response.ok({ message: 'Post delete' })
  }
}

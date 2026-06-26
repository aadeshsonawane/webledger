import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const data = request.only(['fullName', 'email', 'password'])
    const user = await User.create(data) // save in database
    return response.created(user)
  }

  async login({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const user = await User.verifyCredentials(email, password) // verify with register
      const token = await User.accessTokens.create(user, ['*'], {
        expiresIn: '2 days',
      }) // create token
      console.log('***************888', token.value!.release())
      return response.ok({
        token: token.value!.release(),
        user,
      })
    } catch (error) {
      return response.unauthorized({
        message: 'Invalid email or password',
      })
    }
  }
}

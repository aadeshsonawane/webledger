import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const data = request.only(['fullName', 'email', 'password'])

    const user = await User.create(data) //save n database

    return response.created(user)
  }

  async login({ request }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.verifyCredentials(email, password) //verify with register

    const token = await User.accessTokens.create(user) //create token

    return {
      token: token.value!.release(),
      user,
    }
  }
}

/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    register: typeof routes['auth.register']
    login: typeof routes['auth.login']
  }
  posts: {
    index: typeof routes['posts.index']
    create: typeof routes['posts.create']
    store: typeof routes['posts.store']
    show: typeof routes['posts.show']
    edit: typeof routes['posts.edit']
    update: typeof routes['posts.update']
    destroy: typeof routes['posts.destroy']
  }
}

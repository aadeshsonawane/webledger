/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  posts: {
    index: typeof routes['posts.index']
    show: typeof routes['posts.show']
    store: typeof routes['posts.store']
    update: typeof routes['posts.update']
    destroy: typeof routes['posts.destroy']
  }
}

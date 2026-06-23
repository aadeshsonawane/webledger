/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.register': {
    methods: ["POST"],
    pattern: '/register',
    tokens: [{"old":"/register","type":0,"val":"register","end":""}],
    types: placeholder as Registry['auth.register']['types'],
  },
  'auth.login': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'posts.index': {
    methods: ["GET","HEAD"],
    pattern: '/posts',
    tokens: [{"old":"/posts","type":0,"val":"posts","end":""}],
    types: placeholder as Registry['posts.index']['types'],
  },
  'posts.create': {
    methods: ["GET","HEAD"],
    pattern: '/posts/create',
    tokens: [{"old":"/posts/create","type":0,"val":"posts","end":""},{"old":"/posts/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['posts.create']['types'],
  },
  'posts.store': {
    methods: ["POST"],
    pattern: '/posts',
    tokens: [{"old":"/posts","type":0,"val":"posts","end":""}],
    types: placeholder as Registry['posts.store']['types'],
  },
  'posts.show': {
    methods: ["GET","HEAD"],
    pattern: '/posts/:id',
    tokens: [{"old":"/posts/:id","type":0,"val":"posts","end":""},{"old":"/posts/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['posts.show']['types'],
  },
  'posts.edit': {
    methods: ["GET","HEAD"],
    pattern: '/posts/:id/edit',
    tokens: [{"old":"/posts/:id/edit","type":0,"val":"posts","end":""},{"old":"/posts/:id/edit","type":1,"val":"id","end":""},{"old":"/posts/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['posts.edit']['types'],
  },
  'posts.update': {
    methods: ["PUT","PATCH"],
    pattern: '/posts/:id',
    tokens: [{"old":"/posts/:id","type":0,"val":"posts","end":""},{"old":"/posts/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['posts.update']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}

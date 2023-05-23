import A from "./app/app-one/a/page"
import B from "./app/app-one/b/page"
import C from "./app/app-one/c/page"

import { GET as echoAppended } from './app/api/app-one/echo-appended/route'

export const pages = {
  A,
  B,
  C
}

export const api = {
  echoAppended
}
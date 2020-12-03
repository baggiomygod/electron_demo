import * as api from './api'
import { store } from './store'
import * as tools from './tools'

export async function initMain(): Promise<any> {
  return new Promise(async (resolve) => {
    global.__$tools = tools
    global.__$api = api
    global.__$store = store

    resolve()
  })
}

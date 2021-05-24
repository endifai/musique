import { makeAutoObservable } from 'mobx'

interface IUserStore {
  user?: {
    id: string
    email: string
    nickname: string
    avatarUri: string
  }
}

class UserStore implements IUserStore {
  user = undefined

  constructor() {
    makeAutoObservable(this)
  }

  signIn(values: { email: string; password: string }) {
    console.log(values)
  }
}

export default new UserStore()

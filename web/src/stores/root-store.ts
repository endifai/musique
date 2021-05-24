import { UserStore } from './user-store'

export class RootStore {
  userStore: UserStore

  constructor() {
    this.userStore = new UserStore(this)
  }
}

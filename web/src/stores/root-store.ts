import { MyTracksStore } from './my-tracks-store'
import { UserStore } from './user-store'

export class RootStore {
  userStore: UserStore
  myTracksStore: MyTracksStore

  constructor() {
    this.userStore = new UserStore(this)
    this.myTracksStore = new MyTracksStore()
  }
}

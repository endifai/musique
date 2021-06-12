import { MyTracksStore } from './my-tracks-store'
import { SingersStore } from './singers-store'
import { UserStore } from './user-store'

export class RootStore {
  userStore: UserStore
  myTracksStore: MyTracksStore
  singersStore: SingersStore

  constructor() {
    this.userStore = new UserStore(this)
    this.myTracksStore = new MyTracksStore(this)
    this.singersStore = new SingersStore()
  }
}

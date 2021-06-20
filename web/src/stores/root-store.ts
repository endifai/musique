import { FavoritesStore } from './favorites-store'
import { MyTracksStore } from './my-tracks-store'
import { SearchStore } from './search-store'
import { SingersStore } from './singers-store'
import { TracksStore } from './tracks-store'
import { UserStore } from './user-store'

export class RootStore {
  userStore: UserStore
  myTracksStore: MyTracksStore
  singersStore: SingersStore
  tracksStore: TracksStore
  favoritesStore: FavoritesStore
  searchStore: SearchStore

  constructor() {
    this.userStore = new UserStore(this)
    this.myTracksStore = new MyTracksStore(this)
    this.singersStore = new SingersStore()
    this.tracksStore = new TracksStore(this)
    this.favoritesStore = new FavoritesStore()
    this.searchStore = new SearchStore()
  }
}

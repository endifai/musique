import { makeAutoObservable, runInAction } from 'mobx'

import { RootStore } from './root-store'

export class MyTracksStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  async uploadTrackAsync(body: FormData) {
    try {
      const response = await fetch('http://localhost:5000/my-tracks', {
        body,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })

      const { track } = await response.json()

      runInAction(() => this.rootStore.userStore.user?.tracks.unshift(track))
    } catch (error) {
      console.log(error.message)
    }
  }
}

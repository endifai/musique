import { makeAutoObservable, runInAction } from 'mobx'

import { ITrack } from '../types'
import { RootStore } from './root-store'

export class MyTracksStore {
  myTracks: ITrack[] = []
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

      runInAction(() => this.myTracks.unshift(track))
    } catch (error) {
      console.log(error.message)
    }
  }

  async deleteTrackAsync(id: string) {
    const uri = `http://localhost:5000/my-tracks/${id}`

    try {
      const response = await fetch(uri, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })

      const { trackId } = await response.json()

      runInAction(
        () =>
          (this.myTracks = this.myTracks.filter(item => item.id !== trackId)),
      )
    } catch (error) {
      console.log(error.message)
    }
  }
}

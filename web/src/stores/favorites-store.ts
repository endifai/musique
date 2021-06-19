import { makeAutoObservable, runInAction } from 'mobx'

import { ITrack, IUser } from '../types'

type TTrack = ITrack & {
  user: IUser
}

export class FavoritesStore {
  tracks: TTrack[] = []
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  async getFavoritesTracksAsync() {
    try {
      this.loading = true

      const response = await fetch('http://localhost:5000/tracks/favorites', {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const { favorites } = await response.json()

      runInAction(() => {
        this.tracks = favorites
      })
    } catch (error) {
      console.log(error)
    }

    this.loading = false
  }
}

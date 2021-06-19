import { makeAutoObservable, runInAction } from 'mobx'

import { ITrack, IUser } from '../types'

type TTrack = ITrack & {
  user: IUser
}

export class TracksStore {
  tracks: TTrack[] = []
  recentTracks: TTrack[] = []
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  async getTracksAsync() {
    try {
      this.loading = true

      const response = await fetch('http://localhost:5000/tracks', {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const { tracks } = await response.json()

      runInAction(() => {
        this.tracks = tracks
      })
    } catch (error) {
      console.log(error)
    }

    this.loading = false
  }

  async getRecentTracksAsync() {
    try {
      this.loading = true

      const response = await fetch('http://localhost:5000/tracks/recent', {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const { tracks } = await response.json()

      runInAction(() => {
        this.recentTracks = tracks
      })
    } catch (error) {
      console.log(error)
    }

    this.loading = false
  }

  async toggleFavoriteAsync(trackId: string) {
    try {
      const response = await fetch('http://localhost:5000/tracks/favorite', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ trackId }),
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const { trackId: id, isFavorite } = await response.json()

      runInAction(() => {
        const trackIndex = this.tracks.findIndex(item => item.id === id)

        if (this.tracks[trackIndex]) {
          this.tracks[trackIndex].isFavorite = isFavorite
          this.tracks = this.tracks.slice()
        }

        const recentTrackIndex = this.recentTracks.findIndex(
          item => item.id === id,
        )

        if (this.recentTracks[recentTrackIndex]) {
          this.recentTracks[recentTrackIndex].isFavorite = isFavorite
          this.recentTracks = this.recentTracks.slice()
        }

        console.log(this.tracks[trackIndex])
      })
    } catch (error) {
      console.log(error)
    }
  }
}

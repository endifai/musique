import { makeAutoObservable, runInAction } from 'mobx'

import { ITrack, IUser } from '../types'

type TTrack = ITrack & {
  user: IUser
}

interface ISearchResults {
  tracks: TTrack[]
  singers: IUser[]
}

export class SearchStore {
  loading = false
  searchResults: ISearchResults = { tracks: [], singers: [] }
  searchQuery = ''

  constructor() {
    makeAutoObservable(this)
  }

  async searchAsync() {
    try {
      this.loading = true

      const response = await fetch(
        `http://localhost:5000/search?searchQuery=${this.searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
          },
        },
      )

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data = await response.json()

      runInAction(() => {
        this.searchResults = data
      })
    } catch (error) {
      console.log(error)
    }

    this.loading = false
  }
}

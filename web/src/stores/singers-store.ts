import { makeAutoObservable, runInAction } from 'mobx'

import { IUser } from '../types'

export class SingersStore {
  singers: IUser[] = []
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  async getSingersAsync() {
    try {
      this.loading = true

      const response = await fetch('http://localhost:5000/singers', {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const { singers } = await response.json()

      runInAction(() => {
        this.singers = singers
      })
    } catch (error) {
      console.log(error)
    }

    this.loading = false
  }
}

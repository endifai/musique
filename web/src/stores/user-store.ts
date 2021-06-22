/* eslint-disable no-console */
import { makeAutoObservable, runInAction } from 'mobx'

import { ISignInValues } from '../auth/ui/sign-in.form'
import { ISignUpValues } from '../auth/ui/sign-up.form'
import { API_URL } from '../core/constants'
import { IUser } from '../types'
import { RootStore } from './root-store'

export class UserStore {
  user?: IUser
  rootStore: RootStore
  loading = false

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  async signInAsync(values: ISignInValues) {
    try {
      this.loading = true

      const response = await fetch(`${API_URL}/auth/sign-in`, {
        body: JSON.stringify(values),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const { user, jwt } = await response.json()

      if (jwt) {
        window.localStorage.setItem('token', jwt)
      }

      runInAction(() => {
        this.user = user
        this.rootStore.myTracksStore.myTracks = [...user.tracks]
      })
    } catch (error) {
      console.log(error)
    }

    this.loading = false

    return this.user
  }

  async signUpAsync(values: ISignUpValues) {
    try {
      this.loading = true

      const response = await fetch(`${API_URL}/auth/sign-up`, {
        body: JSON.stringify(values),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const { user, jwt } = await response.json()

      if (jwt) {
        window.localStorage.setItem('token', jwt)
      }

      runInAction(() => {
        this.user = user
        this.rootStore.myTracksStore.myTracks = [...user.tracks]
      })
    } catch (error) {
      console.log(error)
    }

    this.loading = false

    return this.user
  }

  async getMeAsync() {
    try {
      this.loading = true

      const response = await fetch(`${API_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })

      const { user } = await response.json()

      runInAction(() => {
        this.user = user
        this.rootStore.myTracksStore.myTracks = [...user.tracks]
      })
    } catch {
      window.localStorage.removeItem('token')
    }

    this.loading = false
  }

  async uploadAvatarAsync(body: FormData) {
    try {
      const response = await fetch(`${API_URL}/user`, {
        body,
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })

      const {
        user: { avatarUri },
      } = await response.json()

      runInAction(() => {
        if (this.user) {
          this.user.avatarUri = avatarUri
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  logout() {
    runInAction(() => (this.user = undefined))
    window.localStorage.removeItem('token')
  }
}

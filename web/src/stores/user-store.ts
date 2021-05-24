import { makeAutoObservable, runInAction } from 'mobx'

import { ISignInValues } from '../auth/ui/sign-in.form'
import { ISignUpValues } from '../auth/ui/sign-up.form'
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

      const response = await fetch('http://localhost:5000/auth/sign-in', {
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

      runInAction(() => (this.user = user))
    } catch (error) {
      console.log(error)
    }

    this.loading = false

    return this.user
  }

  async signUpAsync(values: ISignUpValues) {
    try {
      this.loading = true

      const response = await fetch('http://localhost:5000/auth/sign-up', {
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

      runInAction(() => (this.user = user))
    } catch (error) {
      console.log(error)
    }

    this.loading = false

    return this.user
  }
}

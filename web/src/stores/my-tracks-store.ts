import { makeAutoObservable } from 'mobx'

export class MyTracksStore {
  constructor() {
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

      const json = await response.json()

      console.log(json)
    } catch (error) {
      console.log(error.message)
    }
  }
}

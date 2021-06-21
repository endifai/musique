import { makeAutoObservable } from 'mobx'

import { ITrack, IUser } from '../types'

type TTrack = ITrack & {
  user: IUser
}

export class PlayerStore {
  queue: TTrack[] = []
  currentIndex = 0
  isPlaying = false
  trackProgress = 0

  constructor() {
    makeAutoObservable(this)
  }

  get track() {
    return this.queue[this.currentIndex]
  }

  get isFirst() {
    return this.currentIndex === 0
  }

  get isLast() {
    return this.currentIndex === this.queue.length - 1
  }

  setQueue = (queue: TTrack[]) => {
    this.queue = queue
  }

  setTrackProgress = (progress: number) => {
    this.trackProgress = progress
  }

  play = () => {
    this.isPlaying = true
  }

  pause = () => {
    this.isPlaying = false
  }

  playPrev = () => {
    this.currentIndex = this.currentIndex <= 0 ? 0 : this.currentIndex - 1
  }

  playNext = () => {
    const isLast = this.currentIndex >= this.queue.length - 1

    this.currentIndex = isLast ? this.queue.length - 1 : this.currentIndex + 1

    if (isLast) {
      this.isPlaying = false
      this.trackProgress = 0
    }
  }
}

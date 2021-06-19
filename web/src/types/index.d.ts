export interface IUser {
  id: string
  email: string
  nickname: string
  avatarUri: string
  tracks?: ITrack[]
}

export interface ITrack {
  id: string
  title: string
  duration: number
  fileUrl: string
  created_at: string
  isFavorite?: boolean
}

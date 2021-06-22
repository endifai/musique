/* eslint-disable no-console */
import { Fragment, useCallback, useEffect, useState } from 'react'

import { API_URL } from '../core/constants'
import { useQuery } from '../hooks/use-query'
import { IUser } from '../types'
import { TracksTable } from '../ui/tracks-table'
import { SingerHeader } from './ui/singer-header'

export const SingerScreen = () => {
  const query = useQuery()
  const [user, setUser] = useState<IUser>()
  const [loading, setLoading] = useState(false)

  const id = query.get('id')

  useEffect(() => {
    const getUserAsync = async () => {
      try {
        setLoading(true)

        const response = await fetch(`${API_URL}/singers/${id}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
          },
        })

        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const { user: data } = await response.json()

        setUser(data)
      } catch (error) {
        console.log(error)
      }

      setLoading(false)
    }

    getUserAsync()
  }, [id])

  const handleToggleFavorite = useCallback(
    (trackId, isFavorite) => {
      const formattedTracks =
        user?.tracks?.map(track =>
          track.id === trackId ? { ...track, isFavorite } : track,
        ) ?? []

      setUser(prevState =>
        prevState ? { ...prevState, tracks: formattedTracks } : undefined,
      )
    },
    [user],
  )

  return loading || !user ? (
    <Fragment />
  ) : (
    <Fragment>
      <SingerHeader user={user} />

      <TracksTable
        data={user.tracks ?? []}
        onToggleFavorite={handleToggleFavorite}
      />
    </Fragment>
  )
}

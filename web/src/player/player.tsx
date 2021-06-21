import 'rc-slider/assets/index.css'

import { observer } from 'mobx-react'
import Slider from 'rc-slider'
import { ReactElement, useCallback, useEffect, useRef } from 'react'

import { formatDuration } from '../core/format-duration'
import { formatResourceUrl } from '../core/format-resource-url'
import { useStore } from '../stores/store-context'
import { theme } from '../theme/theme'
import { Box } from '../ui/box'
import { Text } from '../ui/text'
import { Controls } from './controls'

export const Player = observer((): ReactElement => {
  const store = useStore()
  const playerStore = store.playerStore

  const { trackProgress, setTrackProgress, track, isPlaying } = playerStore
  const { fileUrl, title, user } = track

  const audioRef = useRef(new Audio(formatResourceUrl(fileUrl)))
  const intervalRef = useRef<number>()
  const isReady = useRef(false)

  // Destructure for conciseness
  const { duration } = audioRef.current

  const handleNextTrack = useCallback(
    () => playerStore.playNext(),
    [playerStore],
  )

  const startTimer = useCallback(() => {
    // Clear any timers already running
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      const { ended, currentTime } = audioRef.current

      if (ended) {
        handleNextTrack()
      } else {
        setTrackProgress(currentTime)
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, 1000) as any
  }, [handleNextTrack, setTrackProgress])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
      startTimer()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, startTimer])

  useEffect(() => {
    const audio = audioRef.current
    const interval = intervalRef.current

    return () => {
      audio.pause()
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    audioRef.current.pause()

    audioRef.current = new Audio(formatResourceUrl(fileUrl))
    // eslint-disable-next-line unicorn/consistent-destructuring
    setTrackProgress(audioRef.current.currentTime)

    if (isReady.current) {
      audioRef.current.play()
      playerStore.play()
      startTimer()
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true
    }
  }, [fileUrl, playerStore, setTrackProgress, startTimer])

  const handleSlide = (value: number) => {
    // Clear any timers already running
    clearInterval(intervalRef.current)
    audioRef.current.currentTime = value
    setTrackProgress(audioRef.current.currentTime)
  }

  const handleSlideEnd = () => {
    // If not already playing, start
    startTimer()
  }

  return (
    <Box
      display="flex"
      flexBasis="80px"
      minHeight="80px"
      borderTop="1px solid #D1D1CE">
      <Box display="flex" width="300px" backgroundColor="primary" p="16px 24px">
        <img
          src={formatResourceUrl(user.avatarUri)}
          style={{ width: '48px', height: '48px', objectFit: 'cover' }}
        />

        <Box
          px="12px"
          display="flex"
          flexDirection="column"
          justifyContent="center">
          <Text
            my={0}
            fontSize="14px"
            lineHeight="16px"
            color="white"
            fontWeight={600}>
            {title}
          </Text>
          <Text
            my={0}
            fontSize="10px"
            lineHeight="12px"
            color="white"
            opacity="0.5">
            {user.nickname}
          </Text>
        </Box>
      </Box>

      <Box display="flex" flex={1} padding="22px 40px 22px 50px">
        <Controls />

        <Box
          display="flex"
          flex={1}
          alignItems="center"
          justifyContent="space-between">
          <Text fontSize="12px" lineHeight="14px" minWidth="38px">
            {formatDuration(Math.floor(trackProgress))}
          </Text>

          <Box display="flex" flex={1} px="14px">
            <Slider
              min={0}
              max={duration || 100}
              value={trackProgress}
              trackStyle={{ backgroundColor: theme('colors.primary') }}
              handleStyle={{
                borderColor: theme('colors.primary'),
                backgroundColor: theme('colors.primary'),
              }}
              railStyle={{ backgroundColor: '#D1D1CE' }}
              onChange={handleSlide}
              onAfterChange={handleSlideEnd}
            />
          </Box>

          <Text fontSize="12px" lineHeight="14px">
            {formatDuration(Math.floor(duration || 0))}
          </Text>
        </Box>
      </Box>
    </Box>
  )
})

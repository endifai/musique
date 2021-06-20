export const formatDuration = (duration: number): string => {
  const seconds = String(duration % 60).padStart(2, '0')
  const minutes = Math.floor(duration / 60) || '00'

  return `${minutes}:${seconds}`
}

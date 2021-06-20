export const getAudioDuration = (file: Blob): Promise<number> => {
  const reader = new FileReader()
  const audio = document.createElement('audio')

  const result = new Promise<number>(resolve =>
    reader.addEventListener('load', function (e: any) {
      try {
        audio.src = e.target.result
        audio.addEventListener(
          'loadedmetadata',
          function () {
            // Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
            const duration = audio.duration

            resolve(Math.floor(duration))

            console.log(
              'The duration of the song is of: ' + duration + ' seconds',
            )
          },
          false,
        )
      } catch {
        resolve(185)
      }
    }),
  )

  reader.readAsDataURL(file)

  return result
}

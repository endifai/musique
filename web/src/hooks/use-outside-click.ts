import { RefObject, useEffect } from 'react'

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement | null>,
  handleOutsideClick: () => void,
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleOutsideClick()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleOutsideClick, ref])
}

import { Fragment, ReactElement, useState } from 'react'

import { UploadButton } from './upload-button'
import { UploadModal } from './upload-modal'

export const UploadTrack = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)

  return (
    <Fragment>
      <UploadButton handleClick={openModal} />

      <UploadModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </Fragment>
  )
}

import { ReactElement, useState } from 'react'
import styled from 'styled-components'

import { SvgEdit } from '../../icons/edit'
import { AvatarImage } from '../../ui/avatar-image'
import { Box } from '../../ui/box'
import { UploadAvatarModal } from './upload-avatar-modal'

const Container = styled(Box)`
  display: flex;
  position: relative;
`

const Overlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 80px;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: 0.4s opacity ease;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`

interface Props {
  imageUrl: string
}

export const Avatar = ({ imageUrl }: Props): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(true)

  return (
    <Container>
      <AvatarImage src={imageUrl} />

      <Overlay onClick={handleClick}>
        <SvgEdit />
      </Overlay>

      {isOpen && <UploadAvatarModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </Container>
  )
}

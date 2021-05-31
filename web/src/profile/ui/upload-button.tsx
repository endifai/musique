import { ReactElement } from 'react'

import { SvgUpload } from '../../icons/upload'
import { Box } from '../../ui/box'
import { Button } from '../../ui/button'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  handleClick?: () => void
}

export const UploadButton = ({ type, handleClick }: Props): ReactElement => (
  <Button
    text="Загрузить трек"
    icon={
      <Box display="flex" mr="8px">
        <SvgUpload />
      </Box>
    }
    type={type}
    onClick={handleClick}
  />
)

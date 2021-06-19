import { ReactElement } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

import { SvgDrop } from '../../icons/drop'
import { SvgFailed } from '../../icons/failed'
import { SvgSuccess } from '../../icons/success'
import { Box } from '../../ui/box'
import { Text } from '../../ui/text'

const getOptions = ({
  isDragAccept,
  isDragReject,
}: {
  isDragAccept: boolean
  isDragReject: boolean
}) => {
  if (isDragAccept) {
    return {
      color: '#168930',
      text: 'Файл успешно загружен',
      Icon: SvgSuccess,
    }
  }

  if (isDragReject) {
    return {
      color: '#D21010',
      text: 'При загрузке файла произошла ошибка',
      Icon: SvgFailed,
    }
  }

  return {
    color: '#721F84',
    text: 'Перетащите файл или нажмите сюда для загрузки',
    Icon: SvgDrop,
  }
}

const Container = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 100px;
  border-radius: 22px;
  border: 1px dashed #5f5f57;
  outline: none;
  transition: border 0.24s ease-in-out;
  margin-top: 25px;
  margin-bottom: 25px;
`

interface Props {
  accept: string
  onDrop: (acceptedFiles: File[]) => void
}

export const DropZone = ({ accept, onDrop }: Props): ReactElement => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept, onDrop })

  const { color, Icon, text } = getOptions({
    isDragAccept,
    isDragReject,
  })

  return (
    <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />

      <Icon fill={color} />

      <Text
        my={0}
        fontWeight="600"
        textAlign="center"
        fontSize="24px"
        lineHeight="32px"
        color={color}>
        {text}
      </Text>
    </Container>
  )
}

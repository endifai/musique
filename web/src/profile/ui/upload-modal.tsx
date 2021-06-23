import { Form, Formik, FormikHelpers } from 'formik'
import { Dispatch, ReactElement, SetStateAction } from 'react'
import styled from 'styled-components'

import { getAudioDuration } from '../../core/get-audio-duration'
import { useStore } from '../../stores/store-context'
import { Box } from '../../ui/box'
import { Input } from '../../ui/input'
import { Modal } from '../../ui/modal'
import { Text } from '../../ui/text'
import { DropZone } from './drop-zone'
import { UploadButton } from './upload-button'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Title = styled(Text)`
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  margin: 0 auto 25px auto;
  text-align: center;
`

interface IUploadTrackValues {
  title: string
  file: Blob | null
}

const initialValues: IUploadTrackValues = {
  title: '',
  file: null,
}

export const UploadModal = ({ isOpen, setIsOpen }: Props): ReactElement => {
  const store = useStore()

  const handleSubmitAsync = async (
    values: IUploadTrackValues,
    { setSubmitting }: FormikHelpers<IUploadTrackValues>,
  ) => {
    if (!values.file) {
      return
    }

    setSubmitting(true)

    const formData = new FormData()

    formData.append('title', values.title)
    formData.append('file', values.file)

    const duration = await getAudioDuration(values.file)

    formData.append('duration', String(duration))

    await store?.myTracksStore.uploadTrackAsync(formData)

    setSubmitting(false)
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
      <Formik initialValues={initialValues} onSubmit={handleSubmitAsync}>
        {({ values, setFieldValue }) => (
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '600px',
            }}>
            <Title color="black.0">Добавление трека</Title>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center">
              <Text fontWeight="600" fontSize="22px" my={0} mr="40px">
                Название:
              </Text>
              <Input
                value={values.title}
                handleChange={value => setFieldValue('title', value)}
                name="title"
                placeholder="Введите название трека"
              />
            </Box>

            <DropZone
              accept="audio/*"
              onDrop={files => setFieldValue('file', files[0])}
            />

            <UploadButton type="submit" />
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

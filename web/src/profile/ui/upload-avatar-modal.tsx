import { Form, Formik, FormikHelpers } from 'formik'
import { Dispatch, ReactElement, SetStateAction } from 'react'

import { useStore } from '../../stores/store-context'
import { Button } from '../../ui/button'
import { Modal } from '../../ui/modal'
import { DropZone } from './drop-zone'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

interface IUploadAvatar {
  file: null | Blob
}

const initialValues: IUploadAvatar = {
  file: null,
}

export const UploadAvatarModal = ({
  isOpen,
  setIsOpen,
}: Props): ReactElement => {
  const store = useStore()

  const handleSubmitAsync = async (
    values: IUploadAvatar,
    { setSubmitting }: FormikHelpers<IUploadAvatar>,
  ) => {
    if (!values.file) {
      return
    }

    setSubmitting(true)

    const formData = new FormData()

    formData.append('avatar', values.file)

    await store?.userStore.uploadAvatarAsync(formData)

    setSubmitting(false)
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
      <Formik initialValues={initialValues} onSubmit={handleSubmitAsync}>
        {({ setFieldValue }) => (
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '600px',
            }}>
            <DropZone
              accept="image/*"
              onDrop={files => setFieldValue('file', files[0])}
            />

            <Button text="Сохранить" type="submit" />
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

import { Formik } from 'formik'
import { ReactElement } from 'react'
import { useHistory } from 'react-router'

import { useStore } from '../../stores/store-context'
import { SignUpView } from './sign-up.view'

export interface ISignUpValues {
  email: string
  nickname: string
  password: string
}

const initialValues: ISignUpValues = {
  email: '',
  nickname: '',
  password: '',
}

export const SignUpForm = (): ReactElement => {
  const store = useStore()
  const history = useHistory()

  const handleSubmitAsync = async (values: ISignUpValues) => {
    const user = await store?.userStore.signUpAsync(values)

    if (user) {
      history.push('./')
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmitAsync}>
      {({ values, setFieldValue }) => (
        <SignUpView values={values} setFieldValue={setFieldValue} />
      )}
    </Formik>
  )
}

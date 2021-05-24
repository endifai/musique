import { Formik } from 'formik'
import { ReactElement } from 'react'
import { useHistory } from 'react-router'

import { useStore } from '../../stores/store-context'
import { SignInView } from './sign-in.view'

export interface ISignInValues {
  email: string
  password: string
}

const initialValues: ISignInValues = {
  email: '',
  password: '',
}

export const SignInForm = (): ReactElement => {
  const store = useStore()
  const history = useHistory()

  const handleSubmitAsync = async (values: ISignInValues) => {
    const user = await store?.userStore.signInAsync(values)

    if (user) {
      history.push('/')
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmitAsync}>
      {({ values, setFieldValue }) => (
        <SignInView values={values} setFieldValue={setFieldValue} />
      )}
    </Formik>
  )
}

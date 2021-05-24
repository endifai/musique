import { Formik } from 'formik'
import { ReactElement } from 'react'

import userStore from '../../stores/user-store'
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
  const handleSubmit = (values: ISignInValues) => userStore.signIn(values)

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <SignInView values={values} setFieldValue={setFieldValue} />
      )}
    </Formik>
  )
}

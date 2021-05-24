import { Formik } from 'formik'
import { noop } from 'lodash'
import { ReactElement } from 'react'

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
  const handleSubmit = noop

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <SignUpView values={values} setFieldValue={setFieldValue} />
      )}
    </Formik>
  )
}

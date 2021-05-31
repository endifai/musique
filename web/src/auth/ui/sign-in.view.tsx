import { Form } from 'formik'
import { ReactElement } from 'react'
import styled from 'styled-components'

import { SvgEmail } from '../../icons/email'
import { SvgPassword } from '../../icons/password'
import { Box } from '../../ui/box'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Link } from '../../ui/link'
import { Text } from '../../ui/text'
import { ISignInValues } from './sign-in.form'
import { Title } from './title'

const StyledForm = styled(Form)`
  flex: 1;
  max-width: 465px;
`

const StyledButton = styled(Button)`
  margin: 0 auto;
`

interface Props {
  values: ISignInValues
  setFieldValue: (
    field: string,
    value: string | number,
    shouldValidate?: boolean | undefined,
  ) => void
}

export const SignInView = ({ values, setFieldValue }: Props): ReactElement => (
  <StyledForm>
    <Title my={0} mb="85px">
      Войти
    </Title>
    <Input
      value={values.email}
      name="email"
      placeholder="Введите email"
      Icon={SvgEmail}
      handleChange={(value: string) => setFieldValue('email', value)}
      mb="20px"
    />
    <Input
      value={values.password}
      name="password"
      placeholder="Введите пароль"
      type="password"
      Icon={SvgPassword}
      handleChange={(value: string) => setFieldValue('password', value)}
    />
    <Box display="flex" justifyContent="center" my="30px">
      <Text my={0}>Еще не зарегистрирован?</Text>
      <Link to="/sign-up">Регистрация</Link>
    </Box>

    <StyledButton text="Войти" type="submit" />
  </StyledForm>
)

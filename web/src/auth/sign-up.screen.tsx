import { Box } from '../ui/box'
import { AuthScreenTemplate } from './ui/auth-screen-template'
import { SignUpForm } from './ui/sign-up.form'

export const SignUpScreen = () => (
  <AuthScreenTemplate imageUri="url(./sign-up.png)">
    <Box display="flex" flex={6} justifyContent="center" pt="264px" px="20px">
      <SignUpForm />
    </Box>
  </AuthScreenTemplate>
)

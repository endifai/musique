import { Box } from '../ui/box'
import { AuthScreenTemplate } from './ui/auth-screen-template'
import { SignInForm } from './ui/sign-in.form'

export const SignInScreen = () => (
  <AuthScreenTemplate imageUri="url(./sign-in.jpeg)">
    <Box display="flex" flex={6} justifyContent="center" pt="264px" px="20px">
      <SignInForm />
    </Box>
  </AuthScreenTemplate>
)

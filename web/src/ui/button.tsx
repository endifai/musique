import { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

import { theme } from '../theme/theme'

const StyledButton = styled.button`
  color: ${theme('colors.white')};
  background-color: ${theme('colors.primary')};
  border: none;
  border-radius: 24px;
  font-size: 20px;
  line-height: 24px;
  padding: 6px 24px;
  outline: none;
  display: flex;

  :hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
`

interface Props {
  text: string
  type?: 'button' | 'submit' | 'reset'
  icon?: ReactNode
  className?: string
  onClick?: () => void
}

export const Button = ({ text, icon, ...props }: Props): ReactElement => (
  <StyledButton {...props}>
    {icon}
    {text}
  </StyledButton>
)

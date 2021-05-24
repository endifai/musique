import { ReactElement } from 'react'
import styled from 'styled-components'

import { theme } from '../theme/theme'

const StyledButton = styled.button`
  color: ${theme('colors.white')};
  background-color: ${theme('colors.primary')};
  border: none;
  border-radius: 24px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  padding: 6px 24px;
  outline: none;

  :hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
`

interface Props {
  text: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export const Button = ({ text, type, onClick }: Props): ReactElement => (
  <StyledButton type={type} onClick={onClick}>
    {text}
  </StyledButton>
)

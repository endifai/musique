import React, { ChangeEvent, ReactElement, useRef } from 'react'
import styled from 'styled-components'
import { color, ColorProps, SpaceProps } from 'styled-system'

import { Box } from './box'

const Container = styled(Box)`
  display: flex;
  align-items: center;
  background-color: #e3e3e3;
  border-radius: 24px;
  padding: 8px 15px;
`

const StyledInput = styled.input<ColorProps>`
  background-color: #e3e3e3;
  font-size: 18px;
  line-height: 22px;
  outline: none;
  border: none;

  ${color}
`

type Props = SpaceProps & {
  value: string
  name: string
  placeholder?: string
  type?: string
  Icon?: ({ fill }: { fill?: string }) => ReactElement
  handleChange: (value: string) => void
}

export const Input = ({
  value,
  name,
  placeholder,
  type,
  Icon,
  handleChange,
  ...props
}: Props): ReactElement => {
  const ref = useRef<HTMLInputElement>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value

    handleChange(text)
  }

  const handleClick = () => ref.current?.focus()

  const fill = value ? '#191919' : '#5f5f57'

  return (
    <Container onClick={handleClick} {...props}>
      {Icon && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="24px"
          height="24px"
          mr="12px">
          <Icon fill={fill} />
        </Box>
      )}
      <StyledInput
        ref={ref}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
        color={fill}
        onChange={onChange}
      />
    </Container>
  )
}

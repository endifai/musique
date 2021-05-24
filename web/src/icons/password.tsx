import React from 'react'

interface Props {
  fill?: string
}

export const SvgPassword = ({ fill = '#5F5F57' }: Props) => (
  <svg
    width={16}
    height={20}
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5v3H2C.932 8 0 8.776 0 9.833v8.334C0 19.224.932 20 2 20h12c1.068 0 2-.776 2-1.833V9.833C16 8.776 15.068 8 14 8h-1V5A5 5 0 003 5zm8 0v3H5V5a3 3 0 016 0zM2 18v-8h12v8H2zm7-4a1 1 0 11-2 0 1 1 0 012 0z"
      fill={fill}
    />
  </svg>
)

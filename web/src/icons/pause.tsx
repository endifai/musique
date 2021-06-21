import { ReactElement } from 'react'

import { theme } from '../theme/theme'

interface Props {
  fill?: string
  onClick?: () => void
}

export const SvgPause = ({
  fill = theme('colors.primary'),
  onClick,
}: Props): ReactElement => (
  <svg
    width={32}
    height={36}
    viewBox="0 0 32 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}>
    <rect x={3} width={10} height={36} rx={5} fill={fill} />
    <rect x={18} width={10} height={36} rx={5} fill={fill} />
  </svg>
)

import { theme } from '../theme/theme'

interface Props {
  fill?: string
  onClick?: () => void
}

export const SvgPrev = ({ fill = theme('colors.primary'), onClick }: Props) => (
  <svg
    width={18}
    height={20}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}>
    <g fill={fill}>
      <path d="M3.374 8.567L16.139.91a1 1 0 011.515.857V17.27a1 1 0 01-1.524.852L3.365 10.277a1 1 0 01.009-1.71z" />
      <rect
        width={1.962}
        height={19.059}
        rx={0.981}
        transform="matrix(-1 0 0 1 1.962 0)"
      />
    </g>
  </svg>
)

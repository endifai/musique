import { theme } from '../theme/theme'

interface Props {
  fill?: string
  onClick?: () => void
}

export const SvgNext = ({ fill = theme('colors.primary'), onClick }: Props) => (
  <svg
    width={18}
    height={20}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}>
    <path
      d="M14.28 8.567L1.514.91A1 1 0 000 1.766V17.27a1 1 0 001.524.852l12.765-7.845a1 1 0 00-.009-1.71z"
      fill={fill}
    />
    <rect x={15.692} width={1.962} height={19.059} rx={0.981} fill={fill} />
  </svg>
)

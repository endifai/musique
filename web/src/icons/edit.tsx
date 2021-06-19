import { theme } from '../theme/theme'

interface Props {
  fill?: string
}

export const SvgEdit = ({ fill = theme('colors.white') }: Props) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.614 4.333c1.419 0 2.779.567 3.772 1.568l6.718 6.718a5.334 5.334 0 010 7.544l-24.53 24.522c-1.513 1.745-3.658 2.818-6.116 2.987H4.333v-2.167l.007-9.133c.185-2.284 1.247-4.409 2.867-5.836L31.84 5.903a5.322 5.322 0 013.774-1.57zm-20.309 39.01c1.158-.081 2.235-.62 3.1-1.61L34.79 25.35l-8.134-8.134-16.48 16.476c-.878.776-1.421 1.862-1.508 2.856v6.793l6.638.004zM29.72 14.152l8.134 8.134L43.04 17.1a1 1 0 000-1.415l-6.724-6.725a.988.988 0 00-1.403 0L29.72 14.15z"
      fill={fill}
    />
  </svg>
)

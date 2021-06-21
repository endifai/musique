interface Props {
  fill?: string
  width?: number
  height?: number
  viewBox?: string
  onClick?: () => void
}

export const SvgPlay = ({
  fill = '#FCFCFC',
  width = 17,
  height = 20,
  viewBox = '0 0 17 20',
  onClick,
}: Props) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}>
    <path
      d="M15.198 8.176L3.034.832C1.7.027 0 .987 0 2.544V17.41c0 1.567 1.72 2.525 3.052 1.701l12.165-7.523c1.271-.787 1.261-2.64-.019-3.413z"
      fill={fill}
    />
  </svg>
)

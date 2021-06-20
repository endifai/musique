interface Props {
  fill?: string
}

export const SvgPlay = ({ fill = '#FCFCFC' }: Props) => (
  <svg
    width={17}
    height={20}
    viewBox="0 0 17 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.198 8.176L3.034.832C1.7.027 0 .987 0 2.544V17.41c0 1.567 1.72 2.525 3.052 1.701l12.165-7.523c1.271-.787 1.261-2.64-.019-3.413z"
      fill={fill}
    />
  </svg>
)

interface Props {
  fill?: string
}

export const SvgLogout = ({ fill = '#191919' }: Props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.09 12.59L8.5 14l5-5-5-5-1.41 1.41L9.67 8H0v2h9.67l-2.58 2.59zM16 0H2a2 2 0 00-2 2v4h2V2h14v14H2v-4H0v4a2 2 0 002 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"
      fill={fill}
    />
  </svg>
)

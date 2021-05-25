interface Props {
  fill?: string
}

export const SvgSingers = ({ fill = '#5F5F57' }: Props) => (
  <svg
    width={12}
    height={16}
    viewBox="0 0 12 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 16H3.333a.667.667 0 010-1.333H10a.667.667 0 00.667-.667v-2.767a1.087 1.087 0 00-.594-.873 10.88 10.88 0 00-8.146 0c-.336.17-.56.5-.594.873v4.1a.667.667 0 11-1.333 0v-4.1c.03-.92.584-1.742 1.427-2.113a12.207 12.207 0 019.146 0A2.393 2.393 0 0112 11.233V14a2 2 0 01-2 2zM9.333 3.333a3.333 3.333 0 10-6.666 0 3.333 3.333 0 006.666 0zM8 3.333a2 2 0 11-4 0 2 2 0 014 0z"
      fill={fill}
    />
  </svg>
)

import { theme } from '../theme/theme'

interface Props {
  fill?: string
}

export const SvgPlaying = ({ fill = theme('colors.primary') }: Props) => (
  <svg
    width={18}
    height={13}
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.598 13c-1.23 0-2.228-1.026-2.228-2.291V5.362a.754.754 0 00-.743-.764.68.68 0 00-.535.191.69.69 0 00-.201.489 2.485 2.485 0 01-.743 1.787 2.324 2.324 0 01-1.783.65l-.669-.046a.758.758 0 01-.694-.814.752.752 0 01.79-.714l.67.046a.877.877 0 00.668-.245.921.921 0 00.283-.672 2.23 2.23 0 01.653-1.588c.421-.41.981-.634 1.56-.627 1.232 0 2.23 1.026 2.23 2.292v5.346c0 .422.332.764.742.764s.743-.342.743-.764V2.291C8.341 1.026 9.34 0 10.571 0c1.23 0 2.228 1.026 2.228 2.291v6.11c0 .423.333.765.743.765s.743-.342.743-.764c0-1.266.998-2.292 2.23-2.292h.742c.41 0 .743.342.743.764a.754.754 0 01-.743.764h-.743a.754.754 0 00-.743.764c0 1.265-.998 2.291-2.229 2.291-1.23 0-2.229-1.026-2.229-2.291v-6.11a.754.754 0 00-.743-.764.754.754 0 00-.743.763v8.402c.004.61-.229 1.197-.647 1.63A2.199 2.199 0 017.598 13z"
      fill={fill}
    />
  </svg>
)
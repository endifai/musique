import styled from 'styled-components'
import {
  color,
  ColorProps,
  colorStyle,
  ColorStyleProps,
  compose,
  flexbox,
  FlexboxProps,
  fontWeight,
  gridArea,
  GridAreaProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  textStyle,
  TextStyleProps,
  typography,
  TypographyProps,
} from 'styled-system'

export type TextProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  TextStyleProps &
  TypographyProps &
  ColorStyleProps &
  GridAreaProps & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>
    children?: React.ReactNode | React.ReactNodeArray
    userSelect?: string
    wordBreak?: string
    cursor?: string
    borderBottom?: string
    textDecoration?: string
    whiteSpace?: string
    alignItems?: string
    wordWrap?: string
    transition?: string
  }

export const Text = styled.p<TextProps>`
  word-break: ${p => p.wordBreak || 'normal'};
  word-wrap: ${p => p.wordWrap || 'normal'};
  user-select: ${p => p.userSelect};
  cursor: ${p => p.cursor || 'default'};
  border-bottom: ${p => p.borderBottom || 'none'};
  text-decoration: ${p => p.textDecoration || 'none'};
  white-space: ${p => p.whiteSpace || 'normal'};
  align-items: ${p => p.alignItems || 'stretch'};
  transition: ${p => p.transition || 'none'};

  ${compose(
    color,
    space,
    layout,
    flexbox,
    gridArea,
    position,
    textStyle,
    colorStyle,
    typography,
    fontWeight,
  )};
`

Text.defaultProps = {
  as: 'p',
  color: 'greys.0',
  wordBreak: 'normal',
  cursor: 'default',
  textDecoration: 'none',
}

Text.displayName = 'Text'

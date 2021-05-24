import React, { RefObject } from 'react'
import styled, { css } from 'styled-components'
import {
  background,
  BackgroundProps,
  border,
  BordersProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  overflow,
  OverflowProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'
import { ifProp, prop } from 'styled-tools'

export type BoxProps = GridProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  ShadowProps &
  FlexboxProps &
  BordersProps &
  OverflowProps &
  PositionProps &
  TypographyProps &
  BackgroundProps & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>
    children?: React.ReactNode
    cursor?: string
    userSelect?: string
    wordBreak?: string
    ref?: RefObject<HTMLDivElement>
  }

export const Box = styled.div<BoxProps>`
  outline: none;
  min-width: 0;
  box-sizing: border-box;
  cursor: ${p => p.cursor || 'default'};
  user-select: ${p => p.userSelect};
  word-break: ${p => p.wordBreak || 'normal'};

  ${ifProp(
    'overflowY',
    css`
      overflow-y: ${prop('overflowY')};
    `,
  )}

  ${compose(
    grid,
    color,
    space,
    layout,
    border,
    shadow,
    flexbox,
    overflow,
    position,
    typography,
    background,
  )}
`
Box.defaultProps = {
  cursor: 'default',
}

Box.displayName = 'Box'

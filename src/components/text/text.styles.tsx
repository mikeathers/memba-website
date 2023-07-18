import React from 'react'
import styled, {css} from 'styled-components'

import type {Colors, Spacing} from '@/styles'
import {
  colors,
  fontSizes,
  fontWeights,
  letterSpacing,
  lineHeights,
  mediaQueries,
  spacing,
} from '@/styles'

export interface StyledTextProps {
  color?: keyof Colors
  $marginBottomX?: keyof Spacing
  $marginTopX?: keyof Spacing
  $marginLeftX?: keyof Spacing
  $marginRightX?: keyof Spacing
  $textAlign?: 'center'
}

const margins = css<StyledTextProps>`
  ${({$marginTopX}) => {
    if ($marginTopX)
      return css`
        margin-top: ${spacing[$marginTopX]};
      `
  }}

  ${({$marginBottomX}) => {
    if ($marginBottomX)
      return css`
        margin-bottom: ${spacing[$marginBottomX]};
      `
  }}

  ${({$marginRightX}) => {
    if ($marginRightX)
      return css`
        margin-right: ${spacing[$marginRightX]};
      `
  }}

  ${({$marginLeftX}) => {
    if ($marginLeftX)
      return css`
        margin-left: ${spacing[$marginLeftX]};
      `
  }}
`

const styledTextAlign = css<StyledTextProps>`
  ${({$textAlign}) => {
    if ($textAlign === 'center') {
      return css`
        text-align: center;
      `
    }
  }}
`

export const BaseText = styled.p<StyledTextProps>`
  ${margins}
  ${styledTextAlign}
`

export const Hero = styled.h1<StyledTextProps>`
  ${margins}
  ${styledTextAlign}
  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes.xxxl};
  color: ${({color}) => (color ? colors[color] : colors.greys100)};
  letter-spacing: ${letterSpacing.title};
`

export const H1 = styled.h1<StyledTextProps>`
  ${margins}
  ${styledTextAlign}
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.xl};
  color: ${({color}) => (color ? colors[color] : colors.greys100)};
  letter-spacing: ${letterSpacing.title};

  @media (${mediaQueries.s}) {
    font-size: ${fontSizes.xxl};
  }
`
export const H2 = styled.h2<StyledTextProps>`
  ${margins}
  ${styledTextAlign}
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.l};
  color: ${({color}) => (color ? colors[color] : colors.greys100)};
  letter-spacing: ${letterSpacing.title};
`

export const H3 = styled.h3<StyledTextProps>`
  ${margins}
  ${styledTextAlign}
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes.l};
  line-height: ${lineHeights.large};
  color: ${({color}) => (color ? colors[color] : colors.greys100)};
`

export const H4 = styled.h4<StyledTextProps>`
  ${margins}
  ${styledTextAlign}
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes.m};
  line-height: ${lineHeights.medium};
  color: ${({color}) => (color ? colors[color] : colors.greys100)};
`

export const Body = styled(BaseText)`
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.s};
  line-height: ${lineHeights.medium};
  color: ${({color}) => (color ? colors[color] : colors.greys100)};
`

export const BodyBold = styled(Body)`
  font-weight: ${fontWeights.medium};
`

export const Caption = styled(BaseText)`
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.xxs};
  line-height: ${lineHeights.small};
  color: ${({color}) => (color ? colors[color] : colors.greys100)};
`

export const FootNote = styled(BaseText)`
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.xs};
  color: ${({color}) => (color ? colors[color] : colors.greys300)};
`

export const Label = styled(BaseText)`
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.s};
  line-height: ${lineHeights.medium};
  color: ${({color}) => (color ? colors[color] : colors.greys100)};
`

export const Tab = styled(BaseText)`
  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes.xxs};
  line-height: ${lineHeights.medium};
  color: ${({color}) => (color ? colors[color] : colors.neutrals500)};
`

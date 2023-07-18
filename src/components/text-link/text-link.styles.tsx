import React from 'react'
import styled, {css} from 'styled-components'

import {Spacing, spacing} from '@/styles'

export interface StyledTextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  $marginBottomX?: keyof Spacing
  $marginTopX?: keyof Spacing
  $marginLeftX?: keyof Spacing
  $marginRightX?: keyof Spacing
}

const margins = css<StyledTextLinkProps>`
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

export const Container = styled.a`
  ${margins}
`

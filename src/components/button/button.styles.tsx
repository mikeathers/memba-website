import styled, {css} from 'styled-components'

import {borderRadius, colors, fontSizes, spacing} from '@/styles'

import type {ButtonProps} from './button.component'

type StyledButtonProps = Omit<ButtonProps, 'isLoading'>

const margins = css<StyledButtonProps>`
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

export const StyledButton = styled.button<StyledButtonProps>`
  ${margins};
  border-radius: ${borderRadius.rounded};
  background-color: ${colors.blues800};
  color: ${colors.neutrals000};
  padding: 6px ${spacing.space4x};
  outline: none;
  height: 37px;
  font-size: ${fontSizes.s};
  cursor: pointer;

  ${({variant}) => {
    if (variant === 'primary') {
      return css`
        width: 100%;
        background-color: ${colors.blues800};
        color: ${colors.neutrals000};
        border: none;
      `
    }
    if (variant === 'secondary') {
      return css`
        width: 100%;
        background-color: ${colors.neutrals000};
        color: ${colors.blues800};
        border: 1px solid ${colors.blues800};
      `
    }

    if (variant === 'text') {
      return css`
        padding: ${spacing.space1x};
        background-color: transparent;
        border: none;
        color: ${colors.blues800};

        &:active {
          color: ${colors.blues100};
        }
      `
    }
  }};

  &:active {
    filter: brightness(85%);
  }
`

export const StyledLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

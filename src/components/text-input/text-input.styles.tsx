import styled, {css} from 'styled-components'
import {borderRadius, colors, fontSizes, spacing} from '@/styles'
import type {TextInputProps} from '@/components'

export const Container = styled.div`
  margin-bottom: ${spacing.space3x};
`

type StyledTextInputProps = Omit<TextInputProps, 'ref'>

export const StyledTextInput = styled.input<StyledTextInputProps>`
  width: 100%;
  border: 1px solid ${colors.blues100};
  border-radius: ${borderRadius.rounded};
  padding: ${spacing.space1x};
  font-size: ${fontSizes.s};

  &:focus {
    outline: none;
    border: 1px solid ${colors.blues800};
  }

  ${({error}) => {
    if (typeof error === 'string') {
      return css`
        border: 1px solid ${colors.reds500};
      `
    }
  }}
`

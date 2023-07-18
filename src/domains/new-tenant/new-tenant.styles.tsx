import styled from 'styled-components'
import type {HTMLProps} from 'react'

import {borderRadius, colors, fontSizes, mediaQueries, spacing} from '@/styles'

export const Container = styled.div`
  @media (${mediaQueries.s}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Content = styled.div`
  width: 100%;

  @media (${mediaQueries.l}) {
    width: 30%;
  }
`

export const YourPlanContainer = styled.div`
  margin: ${spacing.space3x} 0;
`
export const YourPlanCard = styled.div`
  position: relative;
  margin-top: ${spacing.space2x};
  border: 1px solid ${colors.blues100};
  padding: ${spacing.space3x} ${spacing.space2x};
  border-radius: ${borderRadius.rounded};
  background-color: ${colors.neutrals000};
  filter: drop-shadow(0px 2px 3px rgba(30, 37, 78, 0.1));
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const YourPlanChangeText = styled.button<HTMLProps<HTMLButtonElement>>`
  position: absolute;
  bottom: 10px;
  right: ${spacing.space2x};
  color: ${colors.blues800};
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: ${fontSizes.xxs};

  &:hover {
    text-decoration: underline;
  }
`

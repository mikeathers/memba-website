'use client'
import type React from 'react'

import type {Spacing} from '@/styles'

import {StyledButton, StyledLoadingContainer} from './button.styles'
import {LoadingSpinner} from '../loading-spinner'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement | React.ReactElement[] | string[] | string | undefined
  variant: 'primary' | 'secondary' | 'text'
  $marginBottomX?: keyof Spacing
  $marginTopX?: keyof Spacing
  $marginLeftX?: keyof Spacing
  $marginRightX?: keyof Spacing
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {children, isLoading, ...rest} = props
  return (
    <StyledButton {...rest}>
      {isLoading ? (
        <StyledLoadingContainer>
          Loading <LoadingSpinner />
        </StyledLoadingContainer>
      ) : (
        children
      )}
    </StyledButton>
  )
}

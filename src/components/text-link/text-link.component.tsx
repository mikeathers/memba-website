'use client'
import React from 'react'

import {Container, StyledTextLinkProps} from './text-link.styles'

interface TextLinkProps extends StyledTextLinkProps {
  children:
    | React.ReactElement
    | React.ReactElement[]
    | React.ReactNode
    | React.ReactNode[]
    | string[]
    | string
    | undefined
}

export const TextLink: React.FC<TextLinkProps> = (props) => {
  const {children, ...rest} = props
  return <Container {...rest}>{children}</Container>
}

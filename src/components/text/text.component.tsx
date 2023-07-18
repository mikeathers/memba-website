'use client'
import type React from 'react'

import type {StyledTextProps} from './text.styles'
import {
  Body,
  BodyBold,
  Caption,
  FootNote,
  H1,
  H2,
  H3,
  H4,
  Hero,
  Label,
  Tab,
} from './text.styles'

export interface TextProps extends StyledTextProps {
  type:
    | 'hero'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body'
    | 'body-bold'
    | 'caption'
    | 'footnote'
    | 'label'
    | 'tab'
  children:
    | React.ReactElement
    | React.ReactElement[]
    | React.ReactNode
    | React.ReactNode[]
    | string[]
    | string
    | undefined
}

export const Text: React.FC<TextProps> = (props) => {
  const {type, children, ...rest} = props

  if (type === 'hero') {
    return <Hero {...rest}>{children}</Hero>
  }

  if (type === 'h1') {
    return <H1 {...rest}>{children}</H1>
  }

  if (type === 'h2') {
    return <H2 {...rest}>{children}</H2>
  }

  if (type === 'h3') {
    return <H3 {...rest}>{children}</H3>
  }

  if (type === 'h4') {
    return <H4 {...rest}>{children}</H4>
  }

  if (type === 'body') {
    return <Body {...rest}>{children}</Body>
  }

  if (type === 'body-bold') {
    return <BodyBold {...rest}>{children}</BodyBold>
  }

  if (type === 'caption') {
    return <Caption {...rest}>{children}</Caption>
  }

  if (type === 'footnote') {
    return <FootNote {...rest}>{children}</FootNote>
  }

  if (type === 'label') {
    return <Label {...rest}>{children}</Label>
  }

  if (type === 'tab') {
    return <Tab {...rest}>{children}</Tab>
  }

  return null
}

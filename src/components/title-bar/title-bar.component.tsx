'use client'
import type React from 'react'

import {Circle, Container} from './title-bar.styles'
import {Text} from '../text'

export const TitleBar: React.FC = () => {
  return (
    <Container>
      <Circle />
      <Text type={'h2'}>Memba</Text>
    </Container>
  )
}

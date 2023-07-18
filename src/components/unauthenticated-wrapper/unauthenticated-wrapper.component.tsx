import type React from 'react'

import {TitleBar} from '../title-bar'
import {Footer} from '../footer'
import {Container} from './unauthenticated-wrapper.styles'

export const UnauthenticatedWrapper = ({children}: {children: React.ReactElement}) => {
  return (
    <>
      <TitleBar />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

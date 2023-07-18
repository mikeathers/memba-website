'use client'
import {Container} from './page.styles'
import {TextLink} from '@/components'
import {CONFIG} from '@/config'

export default function Home() {
  return (
    <Container>
      <TextLink href={CONFIG.PAGE_ROUTES.NEW_TENANT}>New tenant</TextLink>
      <TextLink href={CONFIG.PAGE_ROUTES.SIGN_IN}>Sign in</TextLink>
    </Container>
  )
}

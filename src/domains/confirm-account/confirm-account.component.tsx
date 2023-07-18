'use client'
import React from 'react'
import {Container, Content, SendAgainContainer} from './confirm-account.styles'
import {Button, Text} from '@/components'
import {spacingTokens} from '@/styles'
import {interpolateContent} from '@/utils'

interface ConfirmAccountProps {
  content: ConfirmAccountContent
}

export const ConfirmAccount: React.FC<ConfirmAccountProps> = (props) => {
  const {content} = props
  return (
    <Container>
      <Content>
        <Text type={'h1'} $marginBottomX={spacingTokens.space4x}>
          {content.heading}
        </Text>
        <Text type={'h2'} $marginBottomX={spacingTokens.space2x}>
          {interpolateContent(content.emailSentMessage, {
            emailAddress: 'test@test.com',
          })}
        </Text>
        <Text type={'h2'} $marginBottomX={spacingTokens.space8x}>
          {content.confirmationInstruction}
        </Text>
        <Text type={'body'}>{content.didntGetConfirmationEmail}</Text>

        <SendAgainContainer>
          <Text type={'body'}>{content.checkSpamFolder}</Text>
          <Button variant={'text'}>{content.sendAgain}</Button>
        </SendAgainContainer>
      </Content>
    </Container>
  )
}

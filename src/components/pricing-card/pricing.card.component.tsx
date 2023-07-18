'use client'
import type React from 'react'

import {spacingTokens} from '@/styles'

import {
  Container,
  Content,
  TitleContainer,
  TitleNumber,
  TitleText,
  TransactionalCost,
} from './pricing-card.styles'
import {Text} from '../text'
import {Button} from '../button'

interface PricingCardProps {
  titleNumber: string
  titleText: string
  pricePerMonth: string
  numberOfCustomers: string
  transactionalCosts: string
  findOutMore: string
  getStarted: string
  getStartedClick: () => void
  findOutMoreClick: () => void
}

export const PricingCard: React.FC<PricingCardProps> = (props) => {
  const {
    titleNumber,
    titleText,
    pricePerMonth,
    numberOfCustomers,
    transactionalCosts,
    getStarted,
    getStartedClick,
  } = props
  return (
    <Container>
      <TitleContainer>
        <TitleNumber>{titleNumber}</TitleNumber>
        <TitleText>{titleText}</TitleText>
      </TitleContainer>
      <Content>
        <Text type={'h1'} $marginBottomX={spacingTokens.space2x}>
          {pricePerMonth}
        </Text>
        <TransactionalCost type={'footnote'}>{transactionalCosts}</TransactionalCost>
        <Text
          type={'body'}
          $marginTopX={spacingTokens.space2x}
          $marginBottomX={spacingTokens.space1x}
        >
          {numberOfCustomers}
        </Text>
        {/*<Button $marginBottomX={spacingTokens.space10x} variant={'text'}>*/}
        {/*  {findOutMore}*/}
        {/*</Button>*/}
        <Button
          variant={'primary'}
          onClick={getStartedClick}
          $marginTopX={spacingTokens.space10x}
        >
          {getStarted}
        </Button>
      </Content>
    </Container>
  )
}

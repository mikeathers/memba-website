import styled from 'styled-components'
import {
  borderRadius,
  colors,
  fontSizes,
  fontWeights,
  mediaQueries,
  spacing,
} from '@/styles'
import {Text} from '../text'

export const Container = styled.div`
  border-radius: ${borderRadius.rounded};
  border: 1px solid ${colors.blues100};
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 6px;
  margin-top: ${spacing.space4x};

  @media (${mediaQueries.s}) {
    margin-right: ${spacing.space4x};
    &:last-child {
      margin-right: 0;
    }
  }

  @media (${mediaQueries.l}) {
    width: 380px;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  height: 160px;
  border-radius: ${borderRadius.rounded};
  padding: ${spacing.space2x};
  background-color: ${colors.blues800};
  color: ${colors.neutrals000};
`

export const TitleText = styled.h3`
  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes.xxxl};
  margin-top: -5px;
`
export const TitleNumber = styled.h4`
  font-size: ${fontSizes.l};
  font-weight: ${fontWeights.medium};
  margin-top: ${spacing.space6x};
`

export const Content = styled.div`
  padding: ${spacing.space5x} ${spacing.space1x} ${spacing.space3x};
  text-align: center;
`

export const TransactionalCost = styled(Text)`
  width: 95%;
  margin: 0 auto;
`

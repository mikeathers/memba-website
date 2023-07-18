import styled from 'styled-components'

import {colors, mediaQueries, spacing} from '@/styles'

export const Container = styled.div`
  width: 100%;
  padding: ${spacing.space2x};
  border-bottom: 1px solid ${colors.blues100};
  height: 70px;
  display: flex;
  align-items: center;
  margin-bottom: ${spacing.space4x};

  @media (${mediaQueries.l}) {
    margin-bottom: ${spacing.space8x};
  }

  @media (${mediaQueries.xl}) {
    margin-bottom: ${spacing.space12x};
  }
`

export const Circle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${colors.blues800};
  margin-right: ${spacing.space1AndHalfx};
`

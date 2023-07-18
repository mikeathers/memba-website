'use client'
import {Container} from './footer.styles'
import {miscContent} from '@/content'
import {Text} from '../text'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Text type={'footnote'}>{miscContent.allRightsReserved}</Text>
    </Container>
  )
}

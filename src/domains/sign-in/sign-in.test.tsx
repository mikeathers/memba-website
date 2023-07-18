import {render} from '@testing-library/react'
import {SignIn} from './sign-in.component'

const renderComponent = () => render(<SignIn />)

describe('Sign in', () => {
  it('should render the sign in component', () => {
    const {getByText} = renderComponent()
    expect(getByText('Sign in')).toBeInTheDocument()
  })
})

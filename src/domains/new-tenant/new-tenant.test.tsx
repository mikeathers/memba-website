import {mocked} from 'jest-mock'
import {useRouter} from 'next/navigation'
import {fireEvent, render, waitFor} from '@testing-library/react'

import {useTenantStore} from '../stores'
import {NewTenant} from '@/domains'
import {mockNewCustomerContent, mockState} from '../../test-support'
import {CONFIG, TEMP_LOCAL_STORAGE_PWD_KEY, TIERS} from '@/config'
import {AuthProvider, RegisterTenantProps, useAuth} from '@/context'
import {useSafeAsync} from '@/hooks'
import {setItemInLocalStorage} from '@/utils'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

jest.mock('../stores')
jest.mock('@/hooks')
jest.mock('@/utils/storage')
jest.mock('@/context', () => ({
  __esModule: true,
  ...jest.requireActual('@/context'),
  useAuth: jest.fn(),
}))

const mockPush = jest.fn()
const mockRouter = mocked(useRouter)
const mockCustomerStore = mocked(useTenantStore)
const mockUseAuth = mocked(useAuth)
const mockUseSafeAsync = mocked(useSafeAsync)
const mockSetItemInLocalStorage = mocked(setItemInLocalStorage)

const {useAuthMockState, useSafeAsyncMockState} = mockState()

const renderComponent = () =>
  render(
    <AuthProvider>
      <NewTenant content={mockNewCustomerContent} />
    </AuthProvider>,
  )

const tenantData: RegisterTenantProps = {
  tier: TIERS.FREE,
  firstName: 'test',
  lastName: 'user',
  emailAddress: 'test@test.com',
  password: 'Password1!',
  companyName: 'my-test-company',
}

const successfullySubmitForm = (
  getByPlaceholderText: (arg: string) => Element | Node | Document | Window,
  getByText: (arg: string) => Element | Node | Document | Window,
) => {
  fireEvent.change(
    getByPlaceholderText(mockNewCustomerContent.form.firstNamePlaceholder),
    {target: {value: tenantData.firstName}},
  )

  fireEvent.change(
    getByPlaceholderText(mockNewCustomerContent.form.lastNamePlaceholder),
    {target: {value: tenantData.lastName}},
  )

  fireEvent.change(getByPlaceholderText(mockNewCustomerContent.form.emailPlaceholder), {
    target: {value: tenantData.emailAddress},
  })

  fireEvent.change(
    getByPlaceholderText(mockNewCustomerContent.form.passwordPlaceholder),
    {target: {value: tenantData.password}},
  )

  fireEvent.change(
    getByPlaceholderText(mockNewCustomerContent.form.companyNamePlaceholder),
    {target: {value: tenantData.companyName}},
  )

  fireEvent.click(getByText(mockNewCustomerContent.form.createAccount))
}
describe('New Customer', () => {
  beforeEach(() => {
    mockRouter.mockReturnValue({
      push: mockPush,
      ...expect.anything(),
    })
    mockCustomerStore.mockReturnValue({
      tier: TIERS.FREE,
    })
    mockUseSafeAsync.mockReturnValue(useSafeAsyncMockState)
    mockUseAuth.mockReturnValue(useAuthMockState)
  })

  it('should render a card for your plan with correct price', () => {
    const {getByText} = renderComponent()
    expect(getByText(/£0.00/)).toBeInTheDocument()
  })

  it('should call router.push with correct route when clicking change on the your plan card', () => {
    const {getByText} = renderComponent()

    fireEvent.click(getByText(mockNewCustomerContent.change))

    expect(mockPush).toHaveBeenCalledWith(CONFIG.PAGE_ROUTES.PRICING_PLANS)
  })

  it('should call register tenant when form is submitted', async () => {
    const {getByPlaceholderText, getByText} = renderComponent()
    mockUseSafeAsync.mockReturnValue({...useSafeAsyncMockState, isSuccess: true})

    successfullySubmitForm(getByPlaceholderText, getByText)

    const {companyName, ...rest} = tenantData
    await waitFor(() =>
      expect(useAuthMockState.registerTenant).toHaveBeenCalledWith({
        ...rest,
        tenantName: companyName,
      }),
    )
  })

  it('should call setItemInLocalStorage when form is submitted', async () => {
    const {getByPlaceholderText, getByText} = renderComponent()
    mockUseSafeAsync.mockReturnValue({...useSafeAsyncMockState, isSuccess: true})

    successfullySubmitForm(getByPlaceholderText, getByText)

    await waitFor(() =>
      expect(mockSetItemInLocalStorage).toHaveBeenCalledWith(
        TEMP_LOCAL_STORAGE_PWD_KEY,
        tenantData.password,
      ),
    )
  })

  it('should show an error if the tenant already exists', async () => {
    mockUseSafeAsync.mockReturnValue({
      ...useSafeAsyncMockState,
      error: new Error('tenant already exists'),
    })
    const {getByPlaceholderText, getByText} = renderComponent()

    successfullySubmitForm(getByPlaceholderText, getByText)

    await waitFor(() =>
      expect(getByText(mockNewCustomerContent.tenantAlreadyExistsError)),
    )
  })

  it('should show an error if an error occurs', async () => {
    mockUseSafeAsync.mockReturnValue({
      ...useSafeAsyncMockState,
      error: new Error(),
    })
    const {getByPlaceholderText, getByText} = renderComponent()

    successfullySubmitForm(getByPlaceholderText, getByText)

    await waitFor(() => expect(getByText(mockNewCustomerContent.genericError)))
  })

  describe('Form validation', () => {
    it('should show validation messages when form is submitted empty', async () => {
      const {getByText} = renderComponent()

      fireEvent.click(getByText(mockNewCustomerContent.form.createAccount))

      await waitFor(() => {
        expect(
          getByText(mockNewCustomerContent.form.validation.companyName),
        ).toBeInTheDocument()
        expect(
          getByText(mockNewCustomerContent.form.validation.firstName),
        ).toBeInTheDocument()
        expect(
          getByText(mockNewCustomerContent.form.validation.lastName),
        ).toBeInTheDocument()
        expect(
          getByText(mockNewCustomerContent.form.validation.emailAddress),
        ).toBeInTheDocument()
        expect(
          getByText(mockNewCustomerContent.form.validation.password),
        ).toBeInTheDocument()
      })
    })

    it('should show validation message when form is submitted with incorrect email address', async () => {
      const {getByPlaceholderText, getByText} = renderComponent()

      fireEvent.change(
        getByPlaceholderText(mockNewCustomerContent.form.emailPlaceholder),
        {target: {value: 'testemail'}},
      )

      fireEvent.click(getByText(mockNewCustomerContent.form.createAccount))

      await waitFor(() => {
        expect(
          getByText(mockNewCustomerContent.form.validation.emailAddressFormat),
        ).toBeInTheDocument()
      })
    })

    it('should show validation message when form is submitted with a password below 6 characters', async () => {
      const {getByPlaceholderText, getByText} = renderComponent()

      fireEvent.change(
        getByPlaceholderText(mockNewCustomerContent.form.passwordPlaceholder),
        {target: {value: 'pass1'}},
      )

      fireEvent.click(getByText(mockNewCustomerContent.form.createAccount))

      await waitFor(() => {
        expect(
          getByText(mockNewCustomerContent.form.validation.passwordLengthMessage),
        ).toBeInTheDocument()
      })
    })

    it('should show validation message when form is submitted with a password that does not meet the criteria', async () => {
      const {getByPlaceholderText, getByText} = renderComponent()

      fireEvent.change(
        getByPlaceholderText(mockNewCustomerContent.form.passwordPlaceholder),
        {target: {value: 'Password1'}},
      )

      fireEvent.click(getByText(mockNewCustomerContent.form.createAccount))

      await waitFor(() => {
        expect(
          getByText(mockNewCustomerContent.form.validation.passwordValidationMessage),
        ).toBeInTheDocument()
      })
    })
  })
})

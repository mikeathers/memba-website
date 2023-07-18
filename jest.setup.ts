import '@testing-library/jest-dom/extend-expect'
process.env.NEXT_PUBLIC_IS_PRODUCTION = 'false'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    isReady: true,
    pathname: '/',
    hash: '',
    query: {},
    asPath: '/',
    basePath: '',
  }),
}))

window.scrollTo = jest.fn()

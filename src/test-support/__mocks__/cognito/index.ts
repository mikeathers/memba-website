import type {CognitoIdToken, CognitoUserSession} from 'amazon-cognito-identity-js'

export const mockToken = '111'

export const mockCognitoIdToken: CognitoIdToken = {
  payload: {},
  getJwtToken: () => mockToken,
  getExpiration: jest.fn(),
  getIssuedAt: jest.fn(),
  decodePayload: jest.fn(),
}

export const mockGetIdToken = () => mockCognitoIdToken

export const mockCognitoUserSession: CognitoUserSession = {
  getIdToken: mockGetIdToken,
  getRefreshToken: jest.fn(),
  getAccessToken: jest.fn(),
  isValid: () => false,
}

export const mockCognitoUserAttributes: CognitoUserAttributes = {
  email: 'test@test.com',
  family_name: 'user',
  given_name: 'test',
  picture: '',
  phone_number: '07777777777',
  address: '1st street, testsville',
  'custom:isTenantAdmin': false,
  'custom:isMembaAdmin': false,
  'custom:tenantId': '111',
}

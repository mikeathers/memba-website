import type {FormikErrors, FormikValues} from 'formik'

declare global {
  type AuthUser = {
    emailAddress: string
    familyName: string
    givenName: string
    isTenantAdmin?: boolean
    isMembaAdmin?: boolean
    tenantId?: string
  }

  interface NewCustomerFormDetails extends FormikValues {
    emailAddress?: string
    password?: string
    companyName?: string
    firstName?: string
    lastName?: string
  }

  type FormikError =
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined

  type BadResponse = {
    message: string
  }
  type OKResponse = {
    statusCode: number
    body: {
      message: string
    }
  }

  type CognitoError = {
    name: string
    code: string
    message: string
  }

  type CognitoUserAttributes = {
    email: string
    family_name: string
    given_name: string
    picture?: string
    phone_number?: string
    address?: string
    'custom:isTenantAdmin'?: boolean
    'custom:isMembaAdmin'?: boolean
    'custom:tenantId'?: string
  }

  type RegisterTenantResponse = {
    statusCode: number
    body: {
      message: string
      result: {
        id: string
        tenantName: string
        tier: string
        firstName: string
        lastName: string
        emailAddress: string
        addressLineOne: string
        addressLineTwo: string
        doorNumber: string
        townCity: string
        postCode: string
        tenantUrl: string
      }
    }
  }

  /******************* ********************/
  /*************** Content ***************/
  /******************* ********************/

  type MiscContent = {
    allRightsReserved: string
  }
  type NewTenantContent = {
    heading: string
    yourPlan: string
    perMonth: string
    freePricing: string
    basicPricing: string
    premiumPricing: string
    change: string
    tenantAlreadyExistsError: string
    genericError: string
    form: {
      companyName: string
      companyNamePlaceholder: string
      firstName: string
      firstNamePlaceholder: string
      lastName: string
      lastNamePlaceholder: string
      email: string
      emailPlaceholder: string
      password: string
      passwordPlaceholder: string
      createAccount: string
      validation: {
        passwordValidationMessage: string
        passwordLengthMessage: string
        companyName: string
        emailAddress: string
        emailAddressFormat: string
        firstName: string
        lastName: string
        password: string
      }
    }
  }
  type PricingPlansContent = {
    heading: string
    freeTierTitleText: string
    freeTierTitleNumber: string
    freeTierPricePerMonth: string
    freeTierNumberOfCustomer: string
    basicTierTitleText: string
    basicTierTitleNumber: string
    basicTierPricePerMonth: string
    basicTierNumberOfCustomer: string
    premiumTierTitleText: string
    premiumTierTitleNumber: string
    premiumTierPricePerMonth: string
    premiumTierNumberOfCustomer: string
    transactionalCosts: string
    getStarted: string
    findOutMore: string
  }

  type ConfirmAccountContent = {
    heading: string
    emailSentMessage: string
    confirmationInstruction: string
    didntGetConfirmationEmail: string
    checkSpamFolder: string
    sendAgain: string
  }
}

export {}

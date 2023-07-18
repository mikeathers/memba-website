export const newTenant: NewTenantContent = {
  heading: 'Get started',
  yourPlan: 'Your plan',
  perMonth: '/pm',
  freePricing: '£0.00',
  basicPricing: '£30.00',
  premiumPricing: '£50.00',
  change: 'Change',
  tenantAlreadyExistsError: 'A tenant with the details you have provided already exists.',
  genericError: 'Something has gone wrong, please try again later or get in touch.',
  form: {
    companyName: 'Company name:',
    companyNamePlaceholder: 'Enter your company name',
    firstName: 'First name:',
    firstNamePlaceholder: 'Enter your first name',
    lastName: 'Last name:',
    lastNamePlaceholder: 'Enter your last name',
    email: 'Email:',
    emailPlaceholder: 'Enter your email',
    password: 'Password:',
    passwordPlaceholder: 'Create a password',
    createAccount: 'Create account',
    validation: {
      passwordValidationMessage:
        '*Password should include lowercase, uppercase, digits and symbols.',
      passwordLengthMessage: '*Password should be at least 6 characters.',
      companyName: '*Company name is required',
      firstName: '*First name is required',
      lastName: '*Last name is required',
      emailAddress: '*Email address is required',
      emailAddressFormat: '*Email address is not valid',
      password: '*Password is required',
    },
  },
}

export const pricingPlans: PricingPlansContent = {
  heading: 'Pricing plans',
  freeTierTitleText: 'Free',
  freeTierTitleNumber: '#1',
  freeTierPricePerMonth: '£0.00/pm',
  freeTierNumberOfCustomer: 'Up to 20 customers',
  basicTierTitleText: 'Basic',
  basicTierTitleNumber: '#2',
  basicTierPricePerMonth: '£30.00/pm',
  basicTierNumberOfCustomer: 'Up to 200 customers',
  premiumTierTitleText: 'Premium',
  premiumTierTitleNumber: '#3',
  premiumTierPricePerMonth: '£50.00/pm',
  premiumTierNumberOfCustomer: 'Unlimited customers',
  transactionalCosts: 'We will charge you 1% per transaction you make within the app',
  getStarted: 'Get started',
  findOutMore: 'Find out more',
}

export const confirmAccount: ConfirmAccountContent = {
  heading: 'Verification link sent!',
  emailSentMessage: 'We emailed a confirmation link to {emailAddress}',
  confirmationInstruction:
    'Check your email and follow the instructions to activate your account.',
  didntGetConfirmationEmail: "Didn't get a confirmation email?",
  checkSpamFolder: 'Check your spam folder or ',
  sendAgain: 'Send again',
}

export const miscContent: MiscContent = {
  allRightsReserved: 'Copyright © 2023 All rights reserved',
}

'use client'
import type React from 'react'
import {useEffect, useState} from 'react'
import {object, string} from 'yup'
import {Formik} from 'formik'
import {useRouter} from 'next/navigation'

import {Button, Text, TextInput} from '@/components'
import {passwordValidation, sentenceCase, setItemInLocalStorage} from '@/utils'
import {colorTokens, spacingTokens} from '@/styles'
import {CONFIG, TEMP_LOCAL_STORAGE_PWD_KEY, TIERS} from '@/config'
import {useSafeAsync} from '@/hooks'
import {useAuth} from '@/context'

import {useTenantStore} from '../stores'
import {
  Container,
  Content,
  YourPlanCard,
  YourPlanChangeText,
  YourPlanContainer,
} from './new-tenant.styles'

interface NewCustomersComponentProps {
  content: NewTenantContent
}

interface YourPlanCardProps {
  tier: string
  pricing: string
  change: string
}

const Card: React.FC<YourPlanCardProps> = ({tier, pricing, change}) => {
  const router = useRouter()

  const handleChangePlanClick = () => {
    router.push(CONFIG.PAGE_ROUTES.PRICING_PLANS)
  }

  return (
    <YourPlanCard>
      <Text type={'h1'}>{sentenceCase(tier)}</Text>
      <Text type={'body'}>{pricing}</Text>
      <YourPlanChangeText onClick={handleChangePlanClick}>{change}</YourPlanChangeText>
    </YourPlanCard>
  )
}

export const NewTenant: React.FC<NewCustomersComponentProps> = (props) => {
  const {content} = props
  const {registerTenant} = useAuth()
  const {tier} = useTenantStore()
  const router = useRouter()
  const {run, data, error, isLoading, isSuccess} = useSafeAsync()
  const [fetchError, setFetchError] = useState<string>('')
  const getPricing = () => {
    if (tier == TIERS.FREE) return content.freePricing
    if (tier == TIERS.BASIC) return content.basicPricing
    if (tier == TIERS.PREMIUM) return content.premiumPricing
    return ''
  }

  useEffect(() => {
    if (isSuccess) {
      router.push(CONFIG.PAGE_ROUTES.CONFIRM_ACCOUNT)
    }

    if (error?.message.includes('already exists')) {
      setFetchError(content.tenantAlreadyExistsError)
    } else if (error) {
      setFetchError(content.genericError)
    }
  }, [error, data, isLoading])

  const handleSubmitForm = async (values: NewCustomerFormDetails) => {
    const {companyName, ...rest} = values

    await run(
      registerTenant({
        tenantName: companyName,
        tier,
        ...rest,
      }),
    )

    setItemInLocalStorage(TEMP_LOCAL_STORAGE_PWD_KEY, values.password)
  }

  const formSchema = object({
    emailAddress: string()
      .required(content.form.validation.emailAddress)
      .email(content.form.validation.emailAddressFormat),
    firstName: string().required(content.form.validation.firstName),
    lastName: string().required(content.form.validation.lastName),
    companyName: string().required(content.form.validation.companyName),
    password: string()
      .required(content.form.validation.password)
      .min(6, content.form.validation.passwordLengthMessage)
      .test(
        'isValidPassword',
        content.form.validation.passwordValidationMessage,
        (value) => passwordValidation(value),
      ),
  })

  return (
    <Container>
      <Content>
        <Text type={'h1'}>{content.heading}</Text>

        <YourPlanContainer>
          <Text type={'h2'}>{content.yourPlan}</Text>
          <Card
            tier={tier}
            pricing={`${getPricing()} ${content.perMonth}`}
            change={content.change}
          />
        </YourPlanContainer>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: '',
            companyName: '',
          }}
          onSubmit={(values) => handleSubmitForm(values)}
          validationSchema={formSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({handleChange, handleSubmit, values, errors}) => {
            return (
              <>
                <TextInput
                  name={'companyName'}
                  error={errors.companyName}
                  label={content.form.companyName}
                  placeholder={content.form.companyNamePlaceholder}
                  onChange={handleChange('companyName')}
                  value={values.companyName}
                />
                <TextInput
                  name={'firstName'}
                  error={errors.firstName}
                  label={content.form.firstName}
                  placeholder={content.form.firstNamePlaceholder}
                  onChange={handleChange('firstName')}
                  value={values.firstName}
                />
                <TextInput
                  name={'lastName'}
                  error={errors.lastName}
                  label={content.form.lastName}
                  placeholder={content.form.lastNamePlaceholder}
                  onChange={handleChange('lastName')}
                  value={values.lastName}
                />
                <TextInput
                  name={'emailAddress'}
                  error={errors.emailAddress}
                  label={content.form.email}
                  placeholder={content.form.emailPlaceholder}
                  onChange={handleChange('emailAddress')}
                  value={values.emailAddress}
                />
                <TextInput
                  name={'password'}
                  error={errors.password}
                  label={content.form.password}
                  placeholder={content.form.passwordPlaceholder}
                  onChange={handleChange('password')}
                  value={values.password}
                  type={'password'}
                />

                {errors.firstName && (
                  <Text type={'body'} color={colorTokens.reds500}>
                    {errors.firstName}
                  </Text>
                )}

                {errors.lastName && (
                  <Text type={'body'} color={colorTokens.reds500}>
                    {errors.lastName}
                  </Text>
                )}

                {errors.companyName && (
                  <Text type={'body'} color={colorTokens.reds500}>
                    {errors.companyName}
                  </Text>
                )}

                {errors.emailAddress && (
                  <Text type={'body'} color={colorTokens.reds500}>
                    {errors.emailAddress}
                  </Text>
                )}

                {errors.password && (
                  <Text type={'body'} color={colorTokens.reds500}>
                    {errors.password}
                  </Text>
                )}

                {fetchError && (
                  <Text type={'body'} color={colorTokens.reds500}>
                    {fetchError}
                  </Text>
                )}

                <Button
                  isLoading={isLoading}
                  variant={'primary'}
                  onClick={() => handleSubmit()}
                  $marginTopX={spacingTokens.space4x}
                  type={'submit'}
                >
                  {content.form.createAccount}
                </Button>
              </>
            )
          }}
        </Formik>
      </Content>
    </Container>
  )
}

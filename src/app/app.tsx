'use client'
import type React from 'react'

import {UnauthenticatedWrapper} from '@/components'
import {Auth} from '@aws-amplify/auth'
import {CONFIG} from '@/config'
import {AuthProvider} from '@/context'

export const App = ({children}: {children: React.ReactElement}) => {
  Auth.configure({
    mandatorySignIn: false,
    region: 'eu-west-2',
    userPoolId: CONFIG.AMPLIFY.USER_POOL_ID,
    identityPoolId: CONFIG.AMPLIFY.IDENTITY_POOL_ID,
    userPoolWebClientId: CONFIG.AMPLIFY.USER_WEB_CLIENT_ID,
    ssr: true,
  })

  return (
    <AuthProvider>
      <UnauthenticatedWrapper>{children}</UnauthenticatedWrapper>
    </AuthProvider>
  )
}

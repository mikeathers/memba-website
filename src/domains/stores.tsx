import {create} from 'zustand'

interface TenantStore {
  tier: string
  setTier: (tier: string) => void
  emailAddress: string
  setEmailAddress: (emailAddress: string) => void
  password: string
  setPassword: (password: string) => void
  firstName: string
  setFirstName: (firstName: string) => void
  lastName: string
  setLastName: (lastName: string) => void
  tenantName: string
  setTenantName: (tenantName: string) => void
}

export const useTenantStore = create<TenantStore>((set) => ({
  tier: 'Free',
  setTier: (tier: string) => {
    set({tier})
  },
  emailAddress: '',
  setEmailAddress: (emailAddress: string) => {
    set({emailAddress})
  },
  password: '',
  setPassword: (password: string) => {
    set({password})
  },
  firstName: '',
  setFirstName: (firstName: string) => {
    set({firstName})
  },
  lastName: '',
  setLastName: (lastName: string) => {
    set({lastName})
  },
  tenantName: '',
  setTenantName: (tenantName: string) => {
    set({tenantName})
  },
}))

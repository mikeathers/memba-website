import {newTenant, pricingPlans} from '@/content'

export const mockPricingPlansContent: PricingPlansContent = {
  ...JSON.parse(JSON.stringify(pricingPlans)),
}

export const mockNewCustomerContent: NewTenantContent = {
  ...JSON.parse(JSON.stringify(newTenant)),
}

/* eslint-disable */
import {NewTenant} from '@/domains'
import {newTenant} from '@/content'

const NewTenantPage = () => {
  const content = newTenant

  return <NewTenant content={content} />
}

export default NewTenantPage

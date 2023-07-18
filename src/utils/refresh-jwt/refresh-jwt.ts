import {Auth} from '@aws-amplify/auth'

import {JWT_LOCALSTORAGE_KEY} from '@/config'
import {removeItemFromLocalStorage, setItemInLocalStorage} from '@/utils/storage'

export const refreshJwt = async () => {
  try {
    const session = await Auth.currentSession()

    if (session) {
      const accessToken = session.getIdToken().getJwtToken()
      setItemInLocalStorage(JWT_LOCALSTORAGE_KEY, accessToken)
      return accessToken
    }
  } catch (err) {
    removeItemFromLocalStorage(JWT_LOCALSTORAGE_KEY)
    throw err
  }
}

import { API_URL } from "../Config"
import { getRefreshToken } from "../Functions/Common"

export async function apiRefreshToken() {
  const response = await fetch(API_URL + 'auth/refresh', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      "Authorization": "Bearer " + getRefreshToken()
    }
  })
  const responseJson = await response.json()
  return responseJson

}
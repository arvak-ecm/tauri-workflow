export type Claims = Record<string, string | number | unknown>

export const createClaimsTable = (claims: Claims): Record<number, [string, string | number, string]> => {
  const claimsObj: Record<number, [string, string | number, string]> = {}
  let index = 0

  Object.keys(claims).forEach(key => {
    const value = claims[key]
    if (typeof value !== 'string' && typeof value !== 'number') return

    switch (key) {
      case 'aud':
        populateClaim(
          key,
          value,
          "Identifies the intended recipient of the token. In ID tokens, the audience is your app's Application ID, assigned to your app in the Microsoft Entra admin center.",
          index,
          claimsObj
        )
        break
      case 'iss':
        populateClaim(
          key,
          value,
          'Identifies the issuer, or authorization server that constructs and returns the token. It also identifies the external tenant for which the user was authenticated. If the token was issued by the v2.0 endpoint, the URI will end in /v2.0. The GUID that indicates that the user is a consumer user from a Microsoft account is 9188040d-6c67-4c5b-b112-36a304b66dad.',
          index,
          claimsObj
        )
        break
      case 'iat':
        populateClaim(
          key,
          changeDateFormat(value),
          'Issued At indicates when the authentication for this token occurred.',
          index,
          claimsObj
        )
        break
      case 'nbf':
        populateClaim(
          key,
          changeDateFormat(value),
          'The nbf (not before) claim identifies the time (as UNIX timestamp) before which the JWT must not be accepted for processing.',
          index,
          claimsObj
        )
        break
      case 'exp':
        populateClaim(
          key,
          changeDateFormat(value),
          "The exp (expiration time) claim identifies the expiration time (as UNIX timestamp) on or after which the JWT must not be accepted for processing. It's important to note that in certain circumstances, a resource may reject the token before this time.",
          index,
          claimsObj
        )
        break
      case 'name':
        populateClaim(
          key,
          value,
          "The name claim provides a human-readable value that identifies the subject of the token. The value isn't guaranteed to be unique, it can be changed, and it's designed to be used only for display purposes. The profile scope is required to receive this claim.",
          index,
          claimsObj
        )
        break
      case 'preferred_username':
        populateClaim(
          key,
          value,
          'The primary username that represents the user. It could be an email address, phone number, or a generic username without a specified format.',
          index,
          claimsObj
        )
        break
      case 'nonce':
        populateClaim(
          key,
          value,
          'The nonce matches the parameter included in the original /authorize request to the IDP. If it does not match, your application should reject the token.',
          index,
          claimsObj
        )
        break
      case 'oid':
        populateClaim(
          key,
          value,
          'The oid (user’s object id) is the only claim that should be used to uniquely identify a user in an external tenant.',
          index,
          claimsObj
        )
        break
      case 'tid':
        populateClaim(
          key,
          value,
          'The tenant ID. You will use this claim to ensure that only users from the current external tenant can access this app.',
          index,
          claimsObj
        )
        break
      case 'upn':
        populateClaim(
          key,
          value,
          '(user principal name) – might be unique amongst the active set of users in a tenant but tend to get reassigned.',
          index,
          claimsObj
        )
        break
      case 'email':
        populateClaim(
          key,
          value,
          'Email might be unique amongst the active set of users in a tenant but tend to get reassigned.',
          index,
          claimsObj
        )
        break
      case 'acct':
        populateClaim(
          key,
          value,
          'Available as an optional claim, it lets you know what the type of user (homed, guest) is.',
          index,
          claimsObj
        )
        break
      case 'sid':
        populateClaim(key, value, 'Session ID, used for per-session user sign-out.', index, claimsObj)
        break
      case 'sub':
        populateClaim(
          key,
          value,
          'The sub claim is a pairwise identifier - it is unique to a particular application ID.',
          index,
          claimsObj
        )
        break
      case 'ver':
        populateClaim(key, value, 'Version of the token issued by the Microsoft identity platform', index, claimsObj)
        break
      case 'uti':
      case 'rh':
        break
      case '_claim_names':
      case '_claim_sources':
      default:
        populateClaim(key, value, '', index, claimsObj)
        break
    }

    index++
  })

  return claimsObj
}

function populateClaim(
  claim: string,
  value: string | number,
  description: string,
  index: number,
  claimsObject: Record<number, [string, string | number, string]>
): void {
  claimsObject[index] = [claim, value, description]
}

function changeDateFormat(timestamp: string | number): string {
  const time = typeof timestamp === 'string' ? parseInt(timestamp, 10) : timestamp
  const dateObj = new Date(time * 1000)
  return `${time} - [${dateObj.toString()}]`
}

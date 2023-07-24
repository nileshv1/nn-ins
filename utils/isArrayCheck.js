export function isArray(params) {
  if (Array.isArray(params)) {
    return params[0]
  } else {
    return params ? params : ''
  }
}

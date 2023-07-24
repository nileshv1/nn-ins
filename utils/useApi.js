export const UseApiQuery = async (params) => {
  let status = 0

  const response = await fetch(params.path, UseApiMethod(params))
    .then((res) => {
      status = res.status
      return res.json()
    })
    .then((data) => data)

  const responseLog = {
    statusCode: `${status}`,
    URL: `${params.path}`,
    requestMethod: `${params.method}`,
    requestBody: `${params.body}`,
    response: `${JSON.stringify(response)}`
  }

  if (status >= 400) {
    console.error(JSON.stringify(responseLog))
  } else {
    console.info(JSON.stringify(responseLog))
  }

  return { response, status }
}

export const UseApiMethod = (params) => {
  if (
    params.method === 'POST' ||
    params.method === 'PATCH' ||
    params.method === 'PUT'
  ) {
    return {
      method: params.method,
      body: params.body ? params.body : null,
      headers: JSON.parse(params.headers)
    }
  } else if (params.method === 'GET') {
    return {
      method: params.method,
      headers: JSON.parse(params.headers)
    }
  }
}

import type { NextApiRequest, NextApiResponse } from 'next'
import { useApiQuery } from '../../../utils/useApi'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req
  const params = {
    path: `API-URL`,
    method: 'GET',
    headers: JSON.stringify({
      //  Authorization: token,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Accept-Encoding': 'gzip,compress,deflate,br,identity'
    }),
    body: `${JSON.stringify(body)}`
  }
  const { response, status } = await useApiQuery(params)
  return res.status(status).json(response)
}

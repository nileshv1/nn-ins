import type { NextApiRequest, NextApiResponse } from "next";
import { UseApiQuery } from "../../../utils/useApi";
import { error } from "console";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  const params = {
    path: `API-URL`,
    method: "GET",
    headers: JSON.stringify({
      //  Authorization: token,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Accept-Encoding": "gzip,compress,deflate,br,identity",
    }),
    body: `${JSON.stringify(body)}`,
  };
  const { response, status } = await UseApiQuery(params);
  return res.status(status).json(response);
}

export const fetchAllUsers = async () => {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
  if (resp.status === 200) return resp.json();
  else throw new Error("Something went wrong");
};

import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title: string;
  userId: number;
  body: string;
  id: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Data[] = await response.json();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.query.secret !== process.env.SERCRET_TOKEN) {
    return res.status(401).json({ message: "Invalid secret"})
  }
  try {
    await res.revalidate('/blog/shedule');
    await res.revalidate('/blog/music');
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
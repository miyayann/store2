import { NextApiRequest, NextApiResponse } from 'next';
import { client } from "@/lib/api";

const getSearchBlogs = async (req: NextApiRequest, res: NextApiResponse) => {
  const keyword = req.query.keyword as string; // req.query.keywordは文字列としてアクセス可能

  try {
    const response = await client.get({
      endpoint: "blogs",
      queries: { 
        q: decodeURI(keyword), 
      }
    });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred' });
  }
}

export default getSearchBlogs;

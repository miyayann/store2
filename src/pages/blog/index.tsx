import Meta from "@/components/parts/meta";
import Posts from "@/components/template/posts";
import Hero from "@/components/template/hero";
import Container from "@/components/view/container";
import { getAllPosts } from "@/lib/api";
import { eyeCatchLocal } from "@/lib/constants";
import { getImageBuffer } from "@/lib/getImageBuffer";
import { getPlaiceholder } from "plaiceholder";

interface Post {
  title: string;
  slug: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
    blurDataURL: string;
  };
}

interface BlogProps {
  posts: Post[];
}


export default function Blog({posts}: BlogProps) {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログ記事の一覧"/>
      <Hero title="Blog" subtitle="subTitle"/>

      <Posts posts={posts}/>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  for (const post of posts) {
    if(!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyeCatchLocal
    }
    const imageBuffer = await getImageBuffer(post.eyecatch.url)
    const {base64} = await getPlaiceholder(imageBuffer)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      posts
    }
  }
}

import Meta from "@/components/parts/meta";
import Hero from "@/components/template/hero";
import Layout from '@/components/template/layout';
import Container from "@/components/view/container";
import { getAllPosts } from "@/lib/api";
import { eyeCatchLocal } from "@/lib/constants";
import { getImageBuffer } from "@/lib/getImageBuffer";
import { getPlaiceholder } from "plaiceholder";
import { BlogProps } from "../../type";
import Post from "@/components/template/posts";
import PageNation from "@/components/template/pagenation";

export default function Home({posts}: BlogProps) {
  return (
    <Container>
      <Meta />
      <Hero title={"Home"} subtitle={"subHome"} imageOn/>
      <Post posts={posts}/>
      <PageNation nextUrl="/blog" nextText="More Posts"/>
    </Container>
  )
}


export async function getStaticProps() {
  const posts = await getAllPosts(4);
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

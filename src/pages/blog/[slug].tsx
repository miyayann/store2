import { client, getAllSlugs, getPostBySlug } from "@/lib/api";
import { getImageBuffer } from '@/lib/getImageBuffer'
import { getPlaiceholder } from 'plaiceholder'
import React from 'react'
import { Category, Post } from "../../../type";
import Container from "@/components/view/container";
import PostHeader from "@/components/template/post-header";
import Image from "next/image";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/view/two-column";
import PostBody from "@/components/template/post-body";
import ConvertBody from "@/components/parts/convert-body";
import PostCategories from "@/components/parts/post-categories";
import { extractText } from "@/lib/extract-text";
import Meta from "@/components/parts/meta";
import { eyeCatchLocal } from "@/lib/constants";
import { prevNextPost } from "@/lib/prev-next-post";
import PageNation from "@/components/template/pagenation";

const Post = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost
}: Post) => {
  return (
    <Container>
      <Meta pageTitle={title}
            pageDesc={description}
            pageImg={eyecatch.url}
            pageImgW={eyecatch.width}
            pageImgH={eyecatch.height}/>
            <article>
      <PostHeader title={title} subtitle="schedule" publish={publish}/>

      <figure>
        <Image 
          src={eyecatch.url}
          key={eyecatch.url}
          alt=""
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={eyecatch.width}
          height={eyecatch.height}
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
          blurDataURL={eyecatch.blurDataURL}
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
              <ConvertBody contentHTML={content} />
          </PostBody>
        </TwoColumnMain>
            <TwoColumnSidebar>
              <PostCategories categories={categories}/>
            </TwoColumnSidebar>
        </TwoColumn>
        <PageNation 
        prevText={prevPost.title} prevUrl={`/blog/${prevPost.slug}`}
        nextText={nextPost.title} nextUrl={`/blog/${nextPost.slug}`}
        />
        </article>
    </Container>
  )
}


export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()
  return {
    paths: allSlugs.map(({slug}: Category) => `/blog/${slug}`),
    fallback: false
  }
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const slug = context.params.slug

  const post = await getPostBySlug(slug)
  if(!post) {
    return {notFound: true}
  } else {
    const description = extractText(post.content)
  const eyecatch = post.eyecatch ?? eyeCatchLocal
  const imageBuffer = await getImageBuffer(eyecatch.url)
  const {base64} = await getPlaiceholder(imageBuffer)
  eyecatch.blurDataURL = base64

  const allSlugs = await getAllSlugs()
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description,
      prevPost,
      nextPost
    }
  }
  }
}

export default Post


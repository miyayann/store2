import PostHeader from '@/components/template/post-header'
import Posts from '@/components/template/posts'
import Container from '@/components/view/container'
import { getAllCategories, getAllPostsByCategory } from '@/lib/api'
import { eyeCatchLocal } from '@/lib/constants'
import { getImageBuffer } from '@/lib/getImageBuffer'
import { getPlaiceholder } from 'plaiceholder'
import React from 'react'
import { BlogProps } from '../../../../type'
import Meta from '@/components/parts/meta'

interface Category {
  name: string
  id?: string
  slug?: string
  posts?: string
}

const Category: React.FC<Category & BlogProps> = ({ name, posts }) => {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`}/>
      <PostHeader title={name} subtitle="blog category"/>
      <Posts posts={posts}/>
    </Container>
  )
}

export async function getStaticPaths() {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({slug}: Category) => `/blog/category/${slug}`),
    fallback: false
  }
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const catSlug = context.params.slug

  const allCats = await getAllCategories()
  const cat = allCats.find(({slug}: Category)=> slug === catSlug)
  const posts = await getAllPostsByCategory(cat.id) 

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
      name: cat.name,
      posts
    }
  }
}

export default Category

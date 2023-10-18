import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || "",
});

export async function getPostBySlug(slug: string) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: {filters: `slug[equals]${slug}`}
    })
    
    return post.contents[0]
  } catch (err) {
    console.log("Failed to get");
    console.log(err);
  }
}

export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: {fields: 'slug,title', orders: "-publishData", limit: limit}
    })
    return slugs.contents
  } catch (err) {
    console.log("~~ getAllSLugs ~~")
    console.log(err)
  }
}

export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {fields: 'slug,title,eyecatch', orders: "-publishData", limit: limit}
    })
    return posts.contents
  } catch (err) {
    console.log("~~ getAllPosts ~~")
    console.log(err)
  }
}

export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: "categories",
      queries: {fields: 'name,id,slug,revisedAt', orders: "-publishData", limit: limit}
    })
    return categories.contents
  } catch (err) {
    console.log("~~ getAllCategories ~~")
    console.log(err)
  }
}

export async function getAllPostsByCategory(catID: string,limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        filters: `categories[contains]${catID}`,
        fields: 'slug,title,eyecatch',
        orders: "-publishData",
        limit: limit
      }
    })
    return posts.contents
  } catch (err) {
    console.log("~~ getAllCategories ~~")
    console.log(err)
  }
}

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "@/styles/_posts.module.scss"

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

const Posts = ({posts}: BlogProps) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({title, slug, eyecatch}) => (
        <article key={slug} className={styles.post}>
        <Link href={`/blog/${slug}`}>
          <figure>
            <Image
              src={eyecatch.url} 
              alt=''
              style={{objectFit: 'cover'}}
              fill
              sizes='(min-width: 1152px) 576px, 50vw'
              priority
              placeholder='blur'
              blurDataURL={eyecatch.blurDataURL} 
              />
          </figure>
          <h2>{title}</h2>
        </Link>
      </article>
      ))}
    </div>
  )
}

export default Posts

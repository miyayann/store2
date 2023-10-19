import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/view/container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearchengin} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from "@/styles/_search.module.scss"
import { Blog } from "../../type";


export default function search() {
  const [keyword, setKeyWord] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const searchIcon: IconDefinition = faSearchengin;

  const searchBlogs = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
  
    const res = await axios.get("/api/blogs", {
      params: {
        keyword,
      }
    });
    setBlogs(res.data.contents);
  };

  const searchClick = async () => {
    const res = await axios.get("/api/blogs", {
      params: {
        keyword,
      }
    });
    setBlogs(res.data.contents);
  }
  

  return (
    <Container>
      <form onSubmit={searchBlogs} className={styles.search}>
        <input 
        className={styles.input}
        value={keyword} placeholder="キーワードを入力"
        onChange={(e) => setKeyWord(e.target.value)}
        />
        <FontAwesomeIcon className={styles.icon} icon={searchIcon} onClick={searchClick}/>
      </form>
      <div className={styles.main}>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <article key={index}>
              <Link href={`/blog/${blog.slug}`}>
                <h2>{blog.title}</h2>
                <figure style={{ position: "relative", aspectRatio: 16 / 9 }}>
                  <Image
                    src={blog.eyecatch?.url}
                    alt=""
                    style={{ objectFit: "cover" }}
                    fill
                    sizes="(min-width: 1152px) 576px, 50vw"
                    priority
                  />
                </figure>
              </Link>
            </article>
          ))
        ) : (
          <p>検索結果がありません</p>
        )}
    </div>
    </Container>
  )
}
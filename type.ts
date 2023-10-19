export interface Hero {
  title: string 
  subtitle : string 
  imageOn? : boolean
}

export interface PostHeader {
  title: string 
  subtitle : string 
  publish? : string
}

export interface Category {
  name: string
  id?: string
  slug?: string
  posts?: string
}

export interface ContainerProps {
  children: React.ReactNode
  large?: boolean
}

export interface IconProps {
  iconSize? : string
}

export interface metaProps {
  pageTitle?: string;
  pageDesc?: string;
  pageImg?: string;
  pageImgW?: string | number;
  pageImgH?: string | number;
}

interface Eyecatch {
  blurDataURL: string | undefined
  url: string;
  width: number;
  height: number;
}

type PrevNext = {
  slug: string;
  title: string;
};

export interface Post {
  title: string
  publish : string
  content: string
  eyecatch: Eyecatch
  categories: string[]
  description: string
  prevPost: PrevNext
  nextPost: PrevNext
}

interface Postprops {
  title: string;
  slug: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
    blurDataURL: string;
  };
}

export interface BlogProps {
  posts: Postprops[];
}

export interface Blog {
  slug: string;
  title: string;
  eyecatch: {
    url: string;
  };
}

export interface INewsImage {
    url: string;
    height: number;
    width: number;
    thumbnail: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
    base64Encoding: string | null;
    name: string | null;
    title: string | null;
    imageWebSearchUrl: string | null;
  }
  
  export interface INewsProvider {
    name: string;
  }
  
  export interface INewsArticle {
    id: string;
    title: string;
    url: string;
    description: string;
    body: string;
    keywords: string;
    language: string;
    isSafe: boolean;
    datePublished: string;
    provider: INewsProvider;
    image: INewsImage;
  }
  
  export interface INewsGroup {
    _type: string;
    didUMean: string;
    totalCount: number;
    relatedSearch: string[];
    value: INewsArticle[];
  }
  
  export interface INewsResponse {
    economy: INewsGroup;
    technology: INewsGroup;
    world: INewsGroup;
  }
  
  
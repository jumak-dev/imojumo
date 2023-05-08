// 외부 API의 검색 결과 데이터 타입

export interface Book {
  id: number;
  isbn: number;
  title: string;
  author: string;
  translator: string;
  description: string;
  url: string;
  image: string;
  publisher: string;
  pubdate: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface AladinBookSearchResult {
  version: string;
  logo: string;
  title: string;
  link: string;
  pubDate: string;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  query: string;
  searchCategoryId: number;
  searchCategoryName: string;
  item: AladinBookSearchItem[];
}

export interface AladinBookSearchItem {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  mallType: string;
  stockStatus: string;
  mileage: number;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  salesPoint: number;
  adult: false;
  fixedPrice: true;
  customerReviewRank: number;
  seriesInfo?: SeriesInfo;
  subInfo: SubInfo | never;
}

interface SeriesInfo {
  seriesId: number;
  seriesLink: string;
  seriesName: string;
}

interface SubInfo {
  subTitle: string;
  originalTitle: string;
  itemPage: number;
}

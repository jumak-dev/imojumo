// 외부 API의 검색 결과 데이터 타입
export interface InterparkBookSearchResult {
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  items: InterparkBookSearchItem[];
}

export interface InterparkBookSearchItem {
  title: string;
  author: string;
  publisher: string;
  pubDate: string;
  coverSmallUrl: string;
  coverLargeUrl: string;
  description: string;
  isbn: string;
  categoryCode: string;
  categoryName: string;
  priceSales: number;
  priceStandard: number;
  priceMileage: number;
  saleStatus: string;
  stockStatus: string;
}

export interface Book {
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
}

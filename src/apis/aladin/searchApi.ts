import request from '../api';

const { VITE_ALADIN_URL, VITE_ALADIN_TTBKEY } = import.meta.env;

type QueryType = 'Keyword' | 'Title' | 'Author' | 'Publisher';

type SearchTagetType =
  | 'Book'
  | 'Foreign'
  | 'Music'
  | 'DVD'
  | 'Used'
  | 'eBook'
  | 'All';

type SortType =
  | 'Accuracy'
  | 'PublishTime'
  | 'Title'
  | 'SalesPoint'
  | 'CustomerRating';

type coverType = 'Big' | 'MidBig' | 'Mid' | 'Small' | 'Mini' | 'None';

const VERSION = '20131101';

const OUTPUT = 'js';

export interface SearchAladinBookType {
  queryType?: QueryType;
  searchTarget?: SearchTagetType;
  sort?: SortType;
  cover?: coverType;
  categoryId?: number;
  start?: number;
  maxResults?: number;
  query: string;
}

async function searchAladinBook({
  query,
  queryType = 'Title',
  searchTarget = 'Book',
  sort = 'Accuracy',
  cover = 'Mid',
  categoryId = 0,
  start = 1,
  maxResults = 10,
}: SearchAladinBookType) {
  const searchParams = new URLSearchParams({
    query,
    queryType,
    searchTarget,
    sort,
    cover,
    categoryId: String(categoryId),
    start: String(start),
    maxResults: String(maxResults),
    version: VERSION,
    output: OUTPUT,
    ttbkey: VITE_ALADIN_TTBKEY,
  }).toString();

  const response = await request({
    url: `${VITE_ALADIN_URL}?${searchParams}`,
    options: {
      method: 'GET',
    },
  });

  return response;
}

export default searchAladinBook;

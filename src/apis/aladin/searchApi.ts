import request from '../api';

const { VITE_ALADIN_URL, VITE_ALADIN_TTBKEY } = import.meta.env;

type QueryType =
  | 'Keyword'
  | 'Title'
  | 'Author'
  | 'Publisher'
  | 'ItemNewAll'
  | 'ItemNewSpecial';

type SortType =
  | 'Accuracy'
  | 'PublishTime'
  | 'Title'
  | 'SalesPoint'
  | 'CustomerRating';

type CoverType = 'Big' | 'MidBig' | 'Mid' | 'Small' | 'Mini' | 'None';

type Prameter = 'ItemSearch.aspx' | 'ItemList.aspx' | 'ItemLookUp.aspx';

const SEARCHTARGETTYPE = 'Book';

const ITEMIDTYPE = 'ISBN';

const VERSION = '20131101';

const OUTPUT = 'js';

export interface SearchAladinBookType {
  parameter: Prameter;
  queryType?: QueryType;
  sort?: SortType;
  cover?: CoverType;
  categoryId?: number;
  start?: number;
  maxResults?: number;
  query?: string;
  ItemId?: string;
}

async function searchAladinBook({
  parameter = 'ItemSearch.aspx',
  query = '',
  queryType = 'Title',
  sort = 'Accuracy',
  cover = 'Big',
  categoryId = 0,
  start = 1,
  maxResults = 10,
  ItemId = '',
}: SearchAladinBookType) {
  const searchParams = new URLSearchParams({
    parameter,
    query,
    queryType,
    searchTarget: SEARCHTARGETTYPE,
    sort,
    cover,
    categoryId: String(categoryId),
    start: String(start),
    maxResults: String(maxResults),
    version: VERSION,
    output: OUTPUT,
    ttbkey: VITE_ALADIN_TTBKEY,
    ItemId,
    ItemIdType: ITEMIDTYPE,
  }).toString();

  const response = await request({
    url: `${VITE_ALADIN_URL}/${parameter}?${searchParams}`,
    options: {
      method: 'GET',
    },
  });

  return response;
}

export default searchAladinBook;

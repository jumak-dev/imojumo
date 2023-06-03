const getPageIndex = (
  pageNumber: number,
  totalPage: number,
  pageLimit: number = 5,
) => {
  const pageIndex = Math.floor((pageNumber - 1) / pageLimit);
  const startPage = pageIndex * pageLimit + 1;
  const endPage = Math.min(startPage + pageLimit - 1, totalPage);
  return { startPage, endPage };
};

export default getPageIndex;

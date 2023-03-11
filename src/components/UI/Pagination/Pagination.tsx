import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';

interface Data {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function Pagination() {
  const [posts, setPosts] = useState<Data[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      ).then((res) => res.json());
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage; // 페이지의 마지막 게시물 위치
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 페이지의 첫번째 게시물 위치
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 보여져야 하는 게시물만큼 Slice

  const pageNumbers = [];
  const page = Math.ceil(posts.length / postsPerPage);

  for (let i: number = 1; i <= page; i += 1) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => {
    if (pageNumber === 0) return;
    if (pageNumber > page) return;
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {currentPosts.map((post) => (
        <div className="post" key={post.id}>
          {post.body}
        </div>
      ))}
      <PaginationBlock>
        <PageButton onClick={() => paginate(1)}>
          <RxDoubleArrowLeft size={11} />
        </PageButton>
        <PageButton onClick={() => paginate(currentPage - 1)}>
          <IoIosArrowBack size={11} />
        </PageButton>
        {pageNumbers.map((num: number) => (
          <ButtonNav
            key={num}
            onClick={() => paginate(num)}
            isCurrentPage={num === currentPage}
          >
            {num}
          </ButtonNav>
        ))}
        <PageButton onClick={() => paginate(currentPage + 1)}>
          <IoIosArrowForward size={11} />
        </PageButton>
        <PageButton onClick={() => paginate(page)}>
          <RxDoubleArrowRight size={11} />
        </PageButton>
      </PaginationBlock>
    </>
  );
}

const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-sm);
`;

const PaginationBlock = styled.div`
  ${Flex}
  margin: 20px;
`;

const PageButton = styled.button`
  ${Flex}
  padding: 5px;
  width: 30px;
  height: 30px;
  border: 0;
  background-color: transparent;
  border: 1px solid #c4c4c497;

  &:hover {
    color: var(--color-primary-pink);
  }
`;

const ButtonNav = styled(PageButton)<{ isCurrentPage: boolean }>`
  background-color: ${({ isCurrentPage }) =>
    isCurrentPage ? 'var(--color-primary-pink)' : 'white'};

  color: ${({ isCurrentPage }) =>
    isCurrentPage ? 'white' : 'var(--color-primary-pink)'};
`;

export default Pagination;

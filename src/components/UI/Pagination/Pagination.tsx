import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { PaginationType } from '../../../types';
import { flex } from '../../../styles/shared';

function Pagination({ currentPage, setPaginate, pageInfo }: PaginationType) {
  const { page, totalPage } = pageInfo;
  const pageNumbers = Array.from({ length: totalPage }, (_, idx) => idx + 1);

  return (
    <PaginationContainer>
      <PageButton aria-label="처음" onClick={() => setPaginate(1)}>
        <RxDoubleArrowLeft size={11} />
      </PageButton>
      <PageButton
        aria-label="이전"
        onClick={() =>
          currentPage === 1 ? setPaginate(1) : setPaginate(page - 1)
        }
      >
        <IoIosArrowBack size={11} />
      </PageButton>
      {pageNumbers.map((num: number) => (
        <ButtonNav
          aria-label={`${num} 페이지`}
          key={num}
          onClick={() => setPaginate(num)}
          isCurrentPage={num === page}
        >
          {num}
        </ButtonNav>
      ))}
      <PageButton
        aria-label="다음"
        onClick={() =>
          currentPage === totalPage
            ? setPaginate(totalPage)
            : setPaginate(page + 1)
        }
      >
        <IoIosArrowForward size={11} />
      </PageButton>
      <PageButton aria-label="끝" onClick={() => setPaginate(totalPage)}>
        <RxDoubleArrowRight size={11} />
      </PageButton>
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  ${flex}
  margin-bottom: 80px;
  font-size: var(--font-size-sm);
`;

const PageButton = styled.button`
  ${flex}
  border: 0;
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 1px solid #c4c4c497;
  background-color: transparent;
  font-size: var(--font-size-sm);

  &:hover {
    background-color: var(--color-primary-pink);
    color: var(--white);
  }
`;

const ButtonNav = styled(PageButton)<{ isCurrentPage: boolean }>`
  background-color: ${({ isCurrentPage }) =>
    isCurrentPage ? 'var(--color-primary-pink)' : 'white'};

  color: ${({ isCurrentPage }) =>
    isCurrentPage ? 'white' : 'var(--color-primary-pink)'};
`;

export default Pagination;

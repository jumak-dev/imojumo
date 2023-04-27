import { useState } from 'react';
import styled from 'styled-components';
import MainContainer from '../styles/layout';
import { BookDiscussionInfo, PageInfo } from '../types';
import Pagination from '../components/UI/Pagination/Pagination';
import { bookDiscussionCardContainerCSS } from '../styles/shared';
import BookDiscussionCard from '../components/BookDiscussion/BookDiscussionCard';
import BOOKDISCUSSION_DUMMY from '../components/BookDiscussion/BOOKDISCUSSION_DUMMY';

function BookDiscussion() {
  const [posts] = useState<BookDiscussionInfo[]>(BOOKDISCUSSION_DUMMY.data);
  const [paginate, setPaginate] = useState(1);
  const [paginationInfo] = useState<PageInfo>(BOOKDISCUSSION_DUMMY.pageInfo);

  /* 9개씩 가지고 옴
  useEffect(() => {
    const fetchData = async () => {
      try {
        // params에 현재 page 쪽수, 보여질 게시물 개수인 limit 담기
        const res = await fetch('').then((res) => res.json());
        const postData = res.data;
        const paginationData: PageInfo = res.pageInfo;
        
        // setPosts 만들어서
        setPosts(postData);
        // setPosts 만들어서
        setPaginationInfo(postData)
      } catch (e) {
        console.log(e)
      }
        
    };
  }, [paginate]); // paginate 쪽수 변경할 때마다 새로운 데이터 가지고 오게 의존성 추가
  */

  return (
    <MainContainer>
      <Subtitle>독서토론</Subtitle>
      <BookDiscussionCardContainer>
        {posts.map((post) => (
          <BookDiscussionCard bookDiscussionData={post} key={post.id} />
        ))}
      </BookDiscussionCardContainer>
      <Pagination
        currentPage={paginate}
        setPaginate={setPaginate}
        paginationInfo={paginationInfo}
      />
    </MainContainer>
  );
}

export const Subtitle = styled.h2`
  font-size: var(--font-size-l);
  font-weight: bold;
  margin: 60px 10px;
`;

const BookDiscussionCardContainer = styled.section`
  ${bookDiscussionCardContainerCSS}
`;

export default BookDiscussion;

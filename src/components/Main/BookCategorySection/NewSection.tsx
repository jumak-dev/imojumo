import styled from 'styled-components';
import { flex, colFlex } from '../../../styles/shared';
import NewSectionListItem from './NewSectionListItem';
import ProConDiscussionListItem from './ProConDiscussionListItem';
import {
  BookDiscussionInfo,
  ProConDiscussionInfo,
  AladinBookSearchItem,
} from '../../../types';

interface NewSectionProps {
  subtitle: string;
  isProConDiscussion: boolean;
  bookDiscussion?: BookDiscussionInfo[];
  proConDiscussion?: ProConDiscussionInfo[];
  newBook?: AladinBookSearchItem[];
}

function NewSection({
  subtitle,
  isProConDiscussion,
  bookDiscussion,
  proConDiscussion,
  newBook,
}: NewSectionProps) {
  const image =
    'https://image.aladin.co.kr/product/28448/6/cover500/k212835618_2.jpg';

  return (
    <NewSectionContainer>
      <Subtitle>{subtitle}</Subtitle>
      <ThumnailImage src={image} alt="썸네일 이미지" />
      <ListContainer>
        {(isProConDiscussion &&
          proConDiscussion?.map((post) => (
            <ProConDiscussionListItem
              key={post.id}
              proConDiscussionInfo={post}
            />
          ))) ||
          (bookDiscussion &&
            bookDiscussion.map((post) => (
              <NewSectionListItem key={post.id} bookInfo={post.book} />
            ))) ||
          newBook?.map((item) => (
            <NewSectionListItem key={item.itemId} bookInfo={item} />
          ))}
      </ListContainer>
    </NewSectionContainer>
  );
}

const NewSectionContainer = styled.section`
  width: 300px;
  height: 450px;
  margin: 80px 30px;
`;

const Subtitle = styled.h3`
  ${flex}
  height: 10%;
  margin: 10px 0;
  font-weight: bold;
  font-size: var(--font-size-l);
`;

const ThumnailImage = styled.img`
  width: 100%;
  height: 30%;
  object-fit: cover;
`;

const ListContainer = styled.ul`
  ${colFlex};
`;

export default NewSection;

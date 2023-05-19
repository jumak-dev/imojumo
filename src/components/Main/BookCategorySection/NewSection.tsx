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
  bookDiscussion?: BookDiscussionInfo[] | undefined;
  proConDiscussion?: ProConDiscussionInfo[] | undefined;
  newBook?: AladinBookSearchItem[] | undefined;
  imageUrl: string;
}

function NewSection({
  subtitle,
  bookDiscussion,
  proConDiscussion,
  newBook,
  imageUrl,
}: NewSectionProps) {
  return (
    <NewSectionContainer>
      <Subtitle>{subtitle}</Subtitle>
      <ThumnailImage src={imageUrl} alt="썸네일 이미지" />
      <ListContainer>
        {proConDiscussion?.map((post) => (
          <ProConDiscussionListItem key={post.id} proConDiscussionInfo={post} />
        ))}
        {bookDiscussion?.map((post) => (
          <NewSectionListItem key={post.id} bookInfo={post.book} />
        ))}
        {newBook?.map((item) => (
          <NewSectionListItem key={item.itemId} bookInfo={item} />
        ))}
      </ListContainer>
    </NewSectionContainer>
  );
}

const NewSectionContainer = styled.section`
  width: 300px;
  height: 490px;
  margin: 80px 30px;
  border: 1px solid var(--color-inputbox-line);
  border-radius: 10px;
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
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  background-color: var(--color-subtitle-bg-color);
`;

const ListContainer = styled.ul`
  ${colFlex};
`;

export default NewSection;

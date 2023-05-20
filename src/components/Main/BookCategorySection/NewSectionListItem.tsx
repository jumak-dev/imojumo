import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Book, AladinBookSearchItem } from '../../../types';
import { flex, truncateTextCSS } from '../../../styles/shared';

interface NewSectionListItemProps {
  bookInfo: Book | AladinBookSearchItem | undefined;
  path: string;
}

function NewSectionListItem({ bookInfo, path }: NewSectionListItemProps) {
  return (
    <ListItem>
      <ListItemThumnail src={bookInfo?.imageUrl} alt="썸네일 이미지" />
      <ListItemInfo>
        <ListItemTitle to={path}>{bookInfo?.title}</ListItemTitle>
        <ListItemDescription>{bookInfo?.description}</ListItemDescription>
      </ListItemInfo>
    </ListItem>
  );
}

export const ListItem = styled.li`
  ${flex}
  flex: 1;
  border-bottom: 1px solid var(--color-borderbottom-color);
  padding: 20px 10px;

  &:last-child {
    border-bottom: none;
  }
`;

const ListItemThumnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const ListItemTitle = styled(Link)`
  ${truncateTextCSS}

  font-size: var(--font-size-m);
  font-weight: bold;
  margin-bottom: 5px;
`;

const ListItemDescription = styled.p`
  ${truncateTextCSS}
  font-size: var(--font-size-sm);
  color: var(--color-content-text);
`;

const ListItemInfo = styled.div`
  width: 70%;
  margin-left: 20px;
`;

export default NewSectionListItem;

import styled from 'styled-components';
import { flex, truncateTextCSS } from '../../../styles/shared';

interface BookInfo {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface NewSectionListItemProps {
  bookInfo: BookInfo;
}

function NewSectionListItem({ bookInfo }: NewSectionListItemProps) {
  return (
    <ListItem>
      <ListItemThumnail src={bookInfo.imageUrl} alt="썸네일 이미지" />
      <ListItemInfo>
        <ListItemTitle>{bookInfo.title}</ListItemTitle>
        <ListItemDescription>{bookInfo.description}</ListItemDescription>
      </ListItemInfo>
    </ListItem>
  );
}

export const ListItem = styled.li`
  ${flex}
  flex: 1;
  border-bottom: 1px solid var(--color-borderbottom-color);

  &:last-child {
    border-bottom: none;
  }
`;

const ListItemThumnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const ListItemTitle = styled.p`
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

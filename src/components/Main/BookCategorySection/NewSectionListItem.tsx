import styled, { css } from 'styled-components';
import { Flex } from '../../../styles/shared';

interface List {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface ItemProps {
  item: List;
}

function NewSectionListItem({ item }: ItemProps) {
  return (
    <ListItem>
      <ListItemThumnail src={item.imageUrl} />
      <ListItemInfo>
        <ListItemTitle>{item.title}</ListItemTitle>
        <ListItemDescription>{item.description}</ListItemDescription>
      </ListItemInfo>
    </ListItem>
  );
}

export const ListItem = styled.li`
  ${Flex}
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

const TruncateTextCSS = css`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ListItemTitle = styled.p`
  ${TruncateTextCSS}

  font-size: var(--font-size-m);
  font-weight: bold;
  margin-bottom: 5px;
`;

const ListItemDescription = styled.p`
  ${TruncateTextCSS}
  font-size: var(--font-size-sm);
  color: var(--color-content-text);
`;

const ListItemInfo = styled.div`
  width: 70%;
  margin-left: 20px;
`;

export default NewSectionListItem;

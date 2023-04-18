import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';
import { ColFlex } from '../../../styles/shared';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import { ListItem, ListItemTitle } from './NewSectionListItem';

interface ProConDiscussionInfo {
  id: number;
  title: string;
}

interface ProConDiscussionListItemProps {
  proConDiscussionInfo: ProConDiscussionInfo;
}

function ProConDiscussionListItem({
  proConDiscussionInfo,
}: ProConDiscussionListItemProps) {
  return (
    <ListItem>
      <UserIcon isPro />
      <ListItemInfo>
        <ListItemTitle>{proConDiscussionInfo.title}</ListItemTitle>
        <ProgressBar
          isDisplayContent
          barWidth="100%"
          barHeight="10px"
          value="50"
          size="sm"
        />
      </ListItemInfo>
      <UserIcon isPro={false} />
    </ListItem>
  );
}

const UserIcon = styled(FiUser)<{ isPro: boolean }>`
  margin: 0 10px;
  font-size: 45px;
  color: ${({ isPro }) =>
    isPro ? 'var(--color-primary-mint)' : ' var(--color-primary-pink)'};
`;

const ListItemInfo = styled.div`
  ${ColFlex}
  width: 80%;
`;

export default ProConDiscussionListItem;

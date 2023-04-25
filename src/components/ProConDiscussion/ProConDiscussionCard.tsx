import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from '../UI/Card/Card';
import { Post } from '../../pages/ProConDiscussionPage';

interface ProConDiscussionCardProps {
  procondiscussionData: Post;
}

function ProConDiscussionCard({
  procondiscussionData,
}: ProConDiscussionCardProps) {
  return (
    <CardContainer to={`/pro-con-discussion/${procondiscussionData.id}`}>
      dkdkdk
    </CardContainer>
  );
}

const CardContainer = styled(Link)`
  ${Card}
`;

export default ProConDiscussionCard;

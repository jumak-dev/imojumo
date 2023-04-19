import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from '../UI/Card/Card';
import { BookDiscussionInfo } from '../../pages/BookDiscussionPage';

//! id가 아닌 discussionId로 수정되야 함

function BookDiscussionCard({
  bookDiscussionData,
}: {
  bookDiscussionData: BookDiscussionInfo;
}) {
  return (
    <CardContainer
      to={`/book-discussions/${bookDiscussionData.id}`}
      radius="8px"
    >
      히이이이
    </CardContainer>
  );
}

const CardContainer = styled(Link)`
  ${Card}
  width: 270px;
  height: 380px;
  margin: 0 10px;
  overflow: hidden;
`;

export default BookDiscussionCard;

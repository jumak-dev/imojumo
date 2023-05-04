import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { alignCenter, colFlexCenter, rowFlex } from '../../styles/shared';

function RelatedBookDiscussion() {
  return (
    <DiscussionContainer>
      <DiscussionBox>
        <DiscussionTitle>미드나잇라이브러리 대박</DiscussionTitle>
        <DiscussionDate>2023. 04. 12</DiscussionDate>
      </DiscussionBox>
      <LikeBox>
        <LikeCount>24</LikeCount>
        <LikeIcon />
      </LikeBox>
    </DiscussionContainer>
  );
}

const DiscussionContainer = styled.article`
  ${rowFlex}
  justify-content: space-between;
  height: 100px;
  padding: 0 24px;
  border-bottom: 1px solid var(--color-borderbottom-color);
`;

const DiscussionBox = styled.div`
  ${colFlexCenter}
`;

const DiscussionTitle = styled.span`
  font-weight: bold;
  margin-bottom: 12px;
`;

const DiscussionDate = styled.span`
  font-size: var(--font-size-sm);
`;

const LikeBox = styled.div`
  ${alignCenter}
`;

const LikeCount = styled.span`
  margin-right: 16px;
  font-weight: bold;
`;

const LikeIcon = styled(AiFillHeart)`
  font-size: 25px;
  color: var(--color-heart);
`;

export default RelatedBookDiscussion;

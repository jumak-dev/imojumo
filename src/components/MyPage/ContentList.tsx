import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { alignCenter } from '../../styles/shared';
import { MyPageContentProps } from '../../types';
import changeDateString from '../../utils/changeDateString';

function ContentList({ articles }: MyPageContentProps) {
  let path = '';

  if (articles && articles.length > 0) {
    const firstObj = articles[0];
    if ('postLikedByUser' in firstObj) {
      path = '/book-discussion';
    } else if ('proLeader' in firstObj) {
      path = '/pro-con-discussion';
    } else if (firstObj.type === 'book') {
      path = '/book-discussion';
    } else {
      path = '/pro-con-discussion';
    }
  }

  return (
    <ContentListWrraper>
      {articles &&
        articles.map((obj) => (
          <ContentContainer key={obj.id}>
            <ContentTop>
              <ContentLink to={`${path}/${obj.id}`}>
                {'title' in obj ? obj.title : obj.content}
              </ContentLink>
              {'likeCount' in obj && (
                <ContentLikeBox>
                  {obj.likeCount}
                  <HeartIcon />
                </ContentLikeBox>
              )}
            </ContentTop>
            <ContentBottom>{changeDateString(obj.createdAt)}</ContentBottom>
          </ContentContainer>
        ))}
    </ContentListWrraper>
  );
}

const ContentListWrraper = styled.ul`
  width: 100%;
`;

const iconCSS = css`
  margin-left: 8px;
  font-size: 24px;
`;

const HeartIcon = styled(AiFillHeart)`
  ${iconCSS};
  color: var(--color-heart);
`;

const ContentTop = styled.div`
  ${alignCenter};
  justify-content: space-between;
  margin-bottom: 13px;
`;

const ContentBottom = styled.div`
  font-size: var(--font-size-sm);
`;

const ContentLikeBox = styled.div`
  ${alignCenter};
`;

const ContentLink = styled(Link)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  height: 17px;
  font-size: var(--font-size-m);
  font-weight: 600;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const ContentContainer = styled.li`
  padding: 28px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-inputbox-line);
`;

export default ContentList;

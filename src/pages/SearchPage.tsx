import styled from 'styled-components';
import ProConDiscussionSearchCard from '../components/Search/ProConDiscussionSearchCard';
import MainContainer from '../styles/layout';
import { Flex } from '../styles/shared';

function SearchPage() {
  return (
    <MainContainer>
      <ProConDiscussionSearchCardContainer>
        <ProConDiscussionSearchCard />
        <ProConDiscussionSearchCard />
        <ProConDiscussionSearchCard />
      </ProConDiscussionSearchCardContainer>
    </MainContainer>
  );
}

const ProConDiscussionSearchCardContainer = styled.section`
  ${Flex}
`;

export default SearchPage;

import styled from 'styled-components';
import { Flex, ColFlex } from '../../../styles/shared';
import NewSectionListItem from './NewSectionListItem';
import ProConDiscussionListItem from './ProConDiscussionListItem';

interface NewSectionProps {
  subtitle: string;
  isProConDiscussion: boolean;
}

function NewSection({ subtitle, isProConDiscussion }: NewSectionProps) {
  const image =
    'https://image.aladin.co.kr/product/28448/6/cover500/k212835618_2.jpg';

  const list = [
    { id: 0, imageUrl: image, title: '울랄라', description: '솰랄라' },
    {
      id: 1,
      imageUrl: image,
      title: '졸릴 때 보는 책',
      description: '님들 골라봐요',
    },
    { id: 2, imageUrl: image, title: '세비지', description: '쯔쯔쯔쯔' },
  ];

  const proConDiscussionList = [
    { id: 0, title: '다나카' },
    { id: 1, title: '다나카는 일본인인가' },
    { id: 2, title: '진매 vs 순매' },
  ];

  return (
    <NewSectionContainer>
      <Subtitle>{subtitle}</Subtitle>
      <ThumnailImage src={image} alt="썸네일 이미지" />
      <ListContainer>
        {isProConDiscussion
          ? proConDiscussionList.map((item) => (
              <ProConDiscussionListItem key={item.id} item={item} />
            ))
          : list.map((item) => (
              <NewSectionListItem key={item.id} item={item} />
            ))}
      </ListContainer>
    </NewSectionContainer>
  );
}

const NewSectionContainer = styled.section`
  width: 300px;
  height: 400px;
  margin: 60px 20px;
`;

const Subtitle = styled.p`
  ${Flex}
  height: 10%;
  margin: 10px 0;
  font-weight: bold;
  font-size: var(--font-size-l);
`;

const ThumnailImage = styled.img`
  width: 100%;
  height: 30%;
  object-fit: cover;
`;

const ListContainer = styled.ul`
  ${ColFlex}
  height: 60%;
`;

export default NewSection;

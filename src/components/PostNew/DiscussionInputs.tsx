import React from 'react';
import styled from 'styled-components';
import { ColFlex, Flex, ScreenReaderTextCSS } from '../../styles/shared';
import { ButtonBox } from '../UI/Button/Button';
import { Card } from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import Textarea from '../UI/Textarea/Textarea';
import UserProfile from '../UI/UserProfile/UserProfile';

interface DiscussionInputsProps {
  avatar: string;
  title: string;
  content: string;
  containerHeight: string;
  isProConDiscussion?: boolean;
  onProButtonClick?: () => void;
  onConButtonClick?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function DiscussionInputs({
  avatar,
  title,
  content,
  containerHeight,
  onProButtonClick,
  onConButtonClick,
  onChange,
  isProConDiscussion = false,
}: DiscussionInputsProps) {
  return (
    <DiscussionInputListContainer containerHeight={containerHeight}>
      <DiscussionInputListTitle>토론 정보 입력하기</DiscussionInputListTitle>

      <UserProfile
        avatar={avatar}
        alt="프로필 이미지"
        itemGap="10px"
        nickname="yua77"
        size="sm"
      />
      <DiscussionInputContainer>
        {isProConDiscussion ? (
          <ButtonContainer>
            <ProConButton
              type="button"
              buttonType="buttonLeft"
              buttonColor="mint"
              buttonSize="m"
              onClick={onProButtonClick}
            >
              찬성
            </ProConButton>
            <ProConButton
              type="button"
              buttonType="buttonRight"
              buttonColor="pink"
              buttonSize="m"
              onClick={onConButtonClick}
            >
              반대
            </ProConButton>
          </ButtonContainer>
        ) : null}
        <DiscussionTitleInput
          name="title"
          value={title}
          placeholder="토론 제목을 입력하세요..."
          onChange={onChange}
        />
        <DiscussionContentInput
          name="content"
          value={content}
          placeholder="내용을 입력하세요..."
          onChange={onChange}
        />
      </DiscussionInputContainer>
    </DiscussionInputListContainer>
  );
}

const DiscussionInputListContainer = styled.section<{
  containerHeight: string;
}>`
  ${Card}
  flex: 1 1 0;
  width: 100%;
  min-height: ${({ containerHeight }) => containerHeight};
  display: flex;
  align-items: flex-start;
  gap: 22px;
  padding: 32px;
`;

const DiscussionInputListTitle = styled.h4`
  ${ScreenReaderTextCSS};
`;

const ButtonContainer = styled.div`
  ${Flex};
  justify-content flex-start;
`;

const ProConButton = styled(ButtonBox)`
  width: 120px;
  height: 40px;
`;

const DiscussionInputContainer = styled.div`
  ${ColFlex}
  flex: 1 1 0;
  height: 100%;
  gap: 22px;
`;

const DiscussionTitleInput = styled(Input)`
  width: 100%;
`;

const DiscussionContentInput = styled(Textarea)`
  flex: 1 1 0;
`;

export default DiscussionInputs;

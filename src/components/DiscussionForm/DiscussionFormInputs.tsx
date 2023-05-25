import React from 'react';
import styled, { css } from 'styled-components';
import { colFlex, flex, screenReaderTextCSS } from '../../styles/shared';
import { ButtonBox } from '../UI/Button/Button';
import { Card } from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import Textarea from '../UI/Textarea/Textarea';
import UserProfile from '../UI/UserProfile/UserProfile';

interface DiscussionFormInputsProps {
  avatar: string | null;
  author: string;
  title: string;
  content: string;
  containerHeight: string;
  isProConDiscussion?: boolean;
  isPro?: boolean;
  onProButtonClick?: () => void;
  onConButtonClick?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function DiscussionFormInputs({
  avatar,
  author,
  title,
  content,
  containerHeight,
  isPro,
  onProButtonClick,
  onConButtonClick,
  onChange,
  isProConDiscussion = false,
}: DiscussionFormInputsProps) {
  return (
    <DiscussionInputListContainer containerHeight={containerHeight}>
      <DiscussionInputListTitle>토론 정보 입력하기</DiscussionInputListTitle>

      <UserProfile
        avatar={avatar}
        alt={`${author} 프로필 이미지`}
        itemGap="10px"
        nickname={author}
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
              isAcitve={isPro}
            >
              찬성
            </ProConButton>
            <ProConButton
              type="button"
              buttonType="buttonRight"
              buttonColor="pink"
              buttonSize="m"
              onClick={onConButtonClick}
              isAcitve={!isPro}
            >
              반대
            </ProConButton>
          </ButtonContainer>
        ) : null}
        <DiscussionTitleInput
          name="title"
          value={title}
          placeholder="토론 제목을 입력하세요..."
          aria-label="제목"
          onChange={onChange}
        />
        <DiscussionContentInput
          name="content"
          value={content}
          placeholder="내용을 입력하세요..."
          aria-label="내용"
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
  ${screenReaderTextCSS};
`;

const ButtonContainer = styled.div`
  ${flex};
  justify-content: flex-start;
`;

const buttonActiveCSS = css`
  pointer-events: none;
`;

const buttonDeactivateCSS = css`
  filter: brightness(75%);
`;

const ProConButton = styled(ButtonBox)<{ isAcitve: boolean }>`
  width: 120px;
  height: 40px;
  ${({ isAcitve }) => (isAcitve ? buttonActiveCSS : buttonDeactivateCSS)}
`;

const DiscussionInputContainer = styled.div`
  ${colFlex}
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

export default DiscussionFormInputs;

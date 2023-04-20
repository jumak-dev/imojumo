import React from 'react';
import styled from 'styled-components';
import { ColFlex } from '../../styles/shared';
import { Card } from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import Textarea from '../UI/Textarea/Textarea';
import UserProfile from '../UI/UserProfile/UserProfile';

interface DiscussionInputsProps {
  avatar: string;
  title: string;
  content: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function DiscussionInputs({
  avatar,
  title,
  content,
  onChange,
}: DiscussionInputsProps) {
  return (
    <DiscussionContainer>
      <UserProfile
        avatar={avatar}
        alt="프로필 이미지"
        itemGap="10px"
        nickname="yua77"
        size="sm"
      />
      <DiscussionInputContainer>
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
    </DiscussionContainer>
  );
}

const DiscussionContainer = styled.section`
  width: 100%;
  gap: 22px;
  display: flex;
  align-items: flex-start;
  padding: 32px;

  ${Card}
`;

const DiscussionInputContainer = styled.div`
  flex: 1 1 0;
  gap: 22px;

  ${ColFlex}
`;

const DiscussionTitleInput = styled(Input)`
  width: 100%;
`;

const DiscussionContentInput = styled(Textarea)`
  min-height: 162px;
`;

export default DiscussionInputs;

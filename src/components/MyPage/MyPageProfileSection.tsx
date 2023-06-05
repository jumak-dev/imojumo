import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { BiTrash } from 'react-icons/bi';
import { BsFillImageFill } from 'react-icons/bs';
import Button from '../UI/Button/Button';
import { MyPageProfileSectionProps } from '../../types';

function MyPageProfileSection({
  token,
  userInfo,
  updateUsernameMutate,
}: MyPageProfileSectionProps) {
  const [isUsernameChange, setIsUsernameChange] = useState(false);
  const [username, setUsername] = useState(userInfo.username);

  const handleUsernameChangeMode = () => {
    setUsername(userInfo.username);
    setIsUsernameChange((prev) => !prev);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleUsernameChangeButton = () => {
    updateUsernameMutate({ token, username: username || '' });
  };

  return (
    <ProfileContianer>
      <ImageSection>
        <img src={userInfo.avatarUrl || undefined} alt="profile" />
      </ImageSection>
      <InfoSection>
        <InfoTop>
          {isUsernameChange ? (
            <>
              <UsernameInput
                type="text"
                value={username || ''}
                onChange={handleUsernameChange}
                name="changeUsername"
              />
              <EditButton type="button" onClick={handleUsernameChangeButton}>
                확인
              </EditButton>
              <EditButton type="button" onClick={handleUsernameChangeMode}>
                취소
              </EditButton>
            </>
          ) : (
            <>
              <Username>{userInfo.username}</Username>
              <EditButton type="button" onClick={handleUsernameChangeMode}>
                수정
              </EditButton>
            </>
          )}
        </InfoTop>
        <InfoBottom>
          <Button
            type="button"
            buttonType="button"
            buttonColor="mint"
            buttonSize="m"
          >
            <BsFillImageFill size={17} />
            이미지 업로드
          </Button>
          <Button
            type="button"
            buttonType="button"
            buttonColor="pink"
            buttonSize="m"
          >
            <BiTrash size={22} />
            이미지 제거
          </Button>
        </InfoBottom>
      </InfoSection>
    </ProfileContianer>
  );
}

const ProfileContianer = styled.section`
  display: flex;
  margin-top: 64px;
  margin-bottom: 64px;
`;

const ImageSection = styled.section`
  border-right: 1px solid var(--color-inputbox-line);

  img {
    width: 128px;
    border-radius: 50%;
    margin-right: 27px;
  }
`;

const InfoSection = styled.section`
  margin-left: 27px;
`;

const InfoTop = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 6px;
  margin-bottom: 28px;
`;

const usernameCss = css`
  font-size: var(--font-size-xxl);
  font-weight: 600;
  margin-bottom: 4px;
`;

const Username = styled.span`
  ${usernameCss}
`;

const UsernameInput = styled.input`
  ${usernameCss}
  border: 1px solid var(--color-borderbox-line);
  &:focus {
    outline: auto;
  }
`;

const InfoBottom = styled.div`
  display: flex;
  gap: 32px;
`;

const EditButton = styled.button`
  font-size: var(--font-size-m);
  margin-left: 19px;
  padding: 0;
`;

export default MyPageProfileSection;

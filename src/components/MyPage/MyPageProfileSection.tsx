import React, { ChangeEvent, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { BiTrash } from 'react-icons/bi';
import { BsFillImageFill } from 'react-icons/bs';
import Button from '../UI/Button/Button';
import { UserInfo } from '../../recoil/atoms';
import {
  ChangeUserAvatarType,
  DeleteUserAvatarType,
  UpdateUsernameType,
} from '../../apis/myPage/myPageApi';
import URL from '../../constants/URL';

export interface MyPageProfileSectionProps {
  token: string;
  userInfo: UserInfo;
  updateUsernameMutate: (args: UpdateUsernameType) => Promise<void>;
  deleteUserAvatarMutate: (args: DeleteUserAvatarType) => Promise<void>;
  changeUserAvatarMutate: (args: ChangeUserAvatarType) => Promise<void>;
}

function MyPageProfileSection({
  token,
  userInfo,
  updateUsernameMutate,
  deleteUserAvatarMutate,
  changeUserAvatarMutate,
}: MyPageProfileSectionProps) {
  const [isUsernameChange, setIsUsernameChange] = useState(false);
  const [username, setUsername] = useState(userInfo.username);
  const avataInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const form = new FormData();
    const fileList = e.target.files;

    if (!fileList) {
      // eslint-disable-next-line no-alert
      window.alert('프로필 사진을 업로드해 주세요');
      return;
    }

    if (fileList) {
      const getedFile = fileList[0];
      const fileExt = getedFile.name.split('.').pop() || '';
      if (!['jpeg', 'png', 'jpg', 'JPG', 'PNG', 'JPEG'].includes(fileExt)) {
        // eslint-disable-next-line no-alert
        window.alert('jpeg, png, jpg 파일만 업로드가 가능합니다.');
        return;
      }
      form.append('file', getedFile);
      changeUserAvatarMutate({ file: form, token });
    }
  };

  const handleUsernameChangeMode = () => {
    setUsername(userInfo.username);
    setIsUsernameChange((prev) => !prev);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleUsernameChangeButton = () => {
    if (username) {
      updateUsernameMutate({ token, username });
      setIsUsernameChange((prev) => !prev);
    }
  };

  const handleButtonClick = () => {
    avataInputRef.current?.click();
  };

  return (
    <ProfileContianer>
      <ImageSection>
        <img src={userInfo.avatarUrl || URL.DEFAULT_AVATA_URL} alt="profile" />
        <FileInput
          type="file"
          accept="image/*"
          name="profile_Img"
          onChange={handleFileChange}
          ref={avataInputRef}
        />
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
            onClick={handleButtonClick}
          >
            <BsFillImageFill size={17} />
            이미지 업로드
          </Button>
          <Button
            type="button"
            buttonType="button"
            buttonColor="pink"
            buttonSize="m"
            onClick={() => deleteUserAvatarMutate({ token })}
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
    height: 128px;
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

const FileInput = styled.input`
  display: none;
`;

export default MyPageProfileSection;

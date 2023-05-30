import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { colFlex, rowFlex } from '../../../styles/shared';
import { Notification } from '../../../types';
import useUpdateNotification from '../../../hooks/notification/useUpdateNotification';
import { jwtAtom } from '../../../recoil/atoms';
import useDeleteNotification from '../../../hooks/notification/useDeleteNotification';

interface AlarmItemProps {
  notification: Notification;
  handleCloseModal: () => void;
  handleUpdateNotification: (id: number) => void;
  handleDeleteNotification: (id: number) => void;
}

function AlarmItem({
  notification,
  handleCloseModal,
  handleUpdateNotification,
  handleDeleteNotification,
}: AlarmItemProps) {
  const navigate = useNavigate();
  const token = useRecoilValue(jwtAtom) ?? '';

  const { type, id, postId, createdAt, readStatus } = notification;

  const handleNotificationClick = () => {
    const path: { [key: string]: string } = {
      book: `/book-discussion/${postId}`,
      proCon: `/pro-con-discussion/${postId}`,
    };

    if (type in path) {
      navigate(path[type]);
    }
    handleCloseModal();
  };

  const { mutate: updateNotification } = useUpdateNotification({
    onSuccess: () => {
      handleUpdateNotification(id);
    },
  });

  const { mutate: deleteNotification } = useDeleteNotification({
    onSuccess: () => {
      handleDeleteNotification(id);
    },
  });

  const handleNotificationUpdate = async () => {
    await updateNotification({ id, token });
    handleNotificationClick();
  };

  const handleNotificationDelete = async () => {
    await deleteNotification({ id, token });
  };

  return (
    <AlarmItemContainer isRead={readStatus}>
      <AlarmContent onClick={handleNotificationUpdate}>
        <AlarmTitle isRead={readStatus}>
          작성한 게시글에 댓글이 등록되었습니다.
        </AlarmTitle>
        <AlarmDate isRead={readStatus}>
          {dayjs(createdAt).format('YYYY.MM.DD')}
        </AlarmDate>
      </AlarmContent>
      <DeleteButton
        type="button"
        aria-label="삭제"
        onClick={handleNotificationDelete}
      >
        <AiOutlineClose />
      </DeleteButton>
    </AlarmItemContainer>
  );
}

const AlarmItemContainer = styled.li<{ isRead: boolean }>`
  ${rowFlex}
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--color-borderbottom-color);

  background-color: ${({ isRead }) =>
    isRead && 'var(--color-subtitle-bg-color)'};

  &:hover {
    background-color: var(--color-inputbox-bg);
  }

  &:last-child {
    border: none;
  }
`;

const AlarmContent = styled.div`
  ${colFlex}
  flex: 1;
  gap: 8px;
  cursor: pointer;
`;

const AlarmTitle = styled.p<{ isRead: boolean }>`
  color: ${({ isRead }) => isRead && 'var(--color-borderbox-line)'};
`;

const AlarmDate = styled.span<{ isRead: boolean }>`
  font-size: var(--font-size-sm);
  color: ${({ isRead }) =>
    isRead ? 'var(--color-borderbox-line)' : 'var(--color-content-text)'};
`;

const DeleteButton = styled.button`
  font-size: 16px;

  &:hover {
    color: var(--color-heart);
  }
`;

export default AlarmItem;

import styled from 'styled-components';
import ModalPortal from './ModalPortal';
import { MyPageModalProps } from '../../../types';
import ContentList from '../../MyPage/ContentList';
import Button from '../Button/Button';
import Pagination from '../Pagination/Pagination';

function MyPageModal({
  responseDataObj,
  showModal,
  handleCloseModal,
  currentPage,
  setPagenate,
}: MyPageModalProps) {
  return (
    <MyPageModalContainer>
      {showModal && responseDataObj && (
        <ModalPortal width="80%" maxWidth="600px" onClose={handleCloseModal}>
          <ContentList
            articles={
              'comments' in responseDataObj
                ? responseDataObj.comments
                : responseDataObj.posts
            }
          />
          <MyPagenation
            currentPage={currentPage}
            setPaginate={setPagenate}
            pageInfo={responseDataObj.pageInfo}
          />
          <Button
            type="button"
            buttonType="button"
            name="out"
            buttonColor="mint"
            buttonSize="m"
            onClick={handleCloseModal}
          >
            확인
          </Button>
        </ModalPortal>
      )}
    </MyPageModalContainer>
  );
}

const MyPagenation = styled(Pagination)`
  margin-top: 20px;
`;

const MyPageModalContainer = styled.section`
  width: 50%;
  max-width: 600px;
`;

export default MyPageModal;

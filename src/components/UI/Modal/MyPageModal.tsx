import styled from 'styled-components';
import { useEffect } from 'react';
import ModalPortal from './ModalPortal';
import { MyPageModalProps } from '../../../types';
import ContentList from '../../MyPage/ContentList';
import Button from '../Button/Button';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';

function MyPageModal({
  responseDataObj,
  showModal,
  handleCloseModal,
  isLoading = false,
  currentPage,
  setPagenate,
}: MyPageModalProps) {
  let articles;

  if (responseDataObj && 'comments' in responseDataObj) {
    articles = responseDataObj.comments;
  } else if (responseDataObj && 'posts' in responseDataObj) {
    articles = responseDataObj.posts;
  } else {
    articles = null;
  }

  return (
    <MyPageModalContainer>
      {showModal && (
        <ModalPortal width="80%" maxWidth="600px" onClose={handleCloseModal}>
          {isLoading && !articles ? (
            <Loading />
          ) : (
            <>
              <ContentList articles={articles} />
              <MyPagenation
                currentPage={currentPage}
                setPaginate={setPagenate}
                pageInfo={responseDataObj && responseDataObj?.pageInfo}
              />
            </>
          )}
          <MyPageButton
            type="button"
            buttonType="button"
            name="out"
            buttonColor="mint"
            buttonSize="m"
            onClick={handleCloseModal}
            Loading={!articles}
          >
            확인
          </MyPageButton>
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

const MyPageButton = styled(Button)`
  margin-top: ${(props) => props.loading && '200px'};
`;

export default MyPageModal;

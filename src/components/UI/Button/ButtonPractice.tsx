import { BsFillImageFill } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import styled from 'styled-components';
import Button, { ButtonBox } from './Button';

/*
  [필수] buttonType
                    - button: 전체적으로 둥근 버튼
                    - buttonLeft: 왼쪽만 둥근 버튼
                    - buttonRight: 오른쪽만 둥근 버튼

  [필수] buttonColor: ButtonColorType;
                    - mint: 민트 색상 버튼
                    - pink: 핑크 색상 버튼
                    - white:하양 색상 버튼
                    
  [필수] buttonSize: ButtonSizeType;
                    - xl: 로그인 페이지에 쓰이는 버튼
                    - l: 등록하기 버튼
                    - m:마이 페이지에 쓰이는 버튼
                    - sm: 토론하기 버튼
                    - xs: 도서명 검색 페이지에 쓰이는 선택 버튼

  [선택] isBold
  - 글씨 bold 효과를 주고 싶으면 isBold 추가
  - https://gisastudy.tistory.com/117 사이트를 참고해서 isBold 사용
*/

function ButtonPractice() {
  return (
    <ButtonPracticeWrap>
      <h1>ButtonSizeType이 xl인 버튼</h1>
      <Button buttonType="button" buttonColor="mint" buttonSize="xl">
        로그인 하기
      </Button>
      <br />
      <Button buttonType="button" buttonColor="pink" buttonSize="xl">
        구글 로그인
      </Button>
      <hr />
      <h1>ButtonSizeType이 l인 버튼</h1>
      <Button buttonType="button" buttonColor="pink" buttonSize="l">
        등록하기
      </Button>
      <hr />
      <h1>ButtonSizeType이 m인 버튼 + 아이콘 </h1>
      <Button buttonType="button" buttonColor="mint" buttonSize="m">
        <BsFillImageFill size={17} />
        이미지 업로드
      </Button>
      <br />
      <Button buttonType="button" buttonColor="pink" buttonSize="m">
        <BiTrash size={22} />
        이미지 제거
      </Button>
      <hr />
      <h1>ButtonSizeType이 sm인 버튼 </h1>
      <Button buttonType="button" buttonColor="mint" buttonSize="sm">
        토론하기
      </Button>
      <hr />
      <h1>ButtonSizeType이 xs인 버튼 </h1>
      <Button buttonType="button" buttonColor="pink" buttonSize="xs">
        선택
      </Button>
      <hr />
      <h1> 두 개가 붙어있는 버튼 </h1>
      <Flex>
        <AButton buttonType="buttonLeft" buttonColor="mint" buttonSize="m">
          찬성
        </AButton>
        <AButton buttonType="buttonRight" buttonColor="pink" buttonSize="m">
          반대
        </AButton>
      </Flex>
      <br />
      <Flex>
        <BButton buttonType="buttonLeft" buttonColor="mint" buttonSize="m">
          찬성
        </BButton>
        <BButton buttonType="buttonRight" buttonColor="pink" buttonSize="m">
          반대
        </BButton>
      </Flex>
      <hr />
      <h1> 글씨가 Black이고 배경이 하얀 버튼 </h1>
      <CButton buttonType="buttonRight" buttonColor="white" buttonSize="sm">
        등록
      </CButton>
      <br />
      <DButton buttonType="buttonRight" buttonColor="white" buttonSize="sm">
        찾기
      </DButton>
    </ButtonPracticeWrap>
  );
}

const ButtonPracticeWrap = styled.div`
  margin: 10%;

  h1 {
    margin-bottom: 5%;
    font-weight: bold;
    font-size: var(--font-size-xl);
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

//  스타일의 변수명은 수정해서 사용
const AButton = styled(ButtonBox)`
  width: 120px;
  height: 40px;
`;

const BButton = styled(ButtonBox)`
  width: 76px;
  height: 44px;
`;

const CButton = styled(ButtonBox)`
  width: 75px;
  height: 40px;
  color: var(--black);
`;

const DButton = styled(ButtonBox)`
  width: 74px;
  height: 50px;
  color: var(--black);
`;

export default ButtonPractice;

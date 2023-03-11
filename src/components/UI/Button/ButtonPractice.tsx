import { BsFillImageFill } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import styled from 'styled-components';
import Button, { ButtonBox } from './Button';

function ButtonPractice() {
  return (
    <ButtonPracticeWrap>
      <h1>로그인 버튼</h1>
      <Button
        buttonType="button"
        variant="mint"
        width={360}
        heigth={40}
        text="로그인 하기"
        fontSize="M"
        fontColor="white"
        isBold
      />
      <Button
        buttonType="button"
        variant="pink"
        width={360}
        heigth={40}
        text="구글 로그인"
        fontSize="M"
        fontColor="white"
        isBold
        // outline
      />
      <h1>등록 버튼</h1>
      <Button
        buttonType="button"
        variant="pink"
        width={234}
        heigth={55}
        text="등록하기"
        fontSize="L"
        fontColor="white"
      />
      <h1>토론하기 버튼</h1>
      <Button
        buttonType="button"
        variant="mint"
        width={80}
        heigth={36}
        text="토론하기"
        fontSize="M"
        fontColor="white"
        isBold
      />
      <h1>선택 버튼</h1>
      <Button
        buttonType="button"
        variant="pink"
        width={70}
        heigth={36}
        text="선택"
        fontSize="M"
        fontColor="white"
        isBold
      />
      <h1>두 개가 붙어져 있는 버튼</h1>
      <Flex>
        <Button
          buttonType="btnL"
          variant="mint"
          width={120}
          heigth={40}
          text="찬성"
          fontSize="M"
          fontColor="white"
        />
        <Button
          buttonType="btnR"
          variant="pink"
          width={120}
          heigth={40}
          text="반대"
          fontSize="M"
          fontColor="white"
        />
      </Flex>
      <h1>오른쪽만 radius가 적용된 버튼</h1>
      <Button
        buttonType="btnR"
        variant="white"
        width={75}
        heigth={40}
        text="등록"
        fontSize="M"
        fontColor="black"
        outline
      />
      <Button
        buttonType="btnR"
        variant="white"
        width={75}
        heigth={40}
        text="찾기"
        fontSize="M"
        fontColor="black"
        outline
      />

      <h1>아이콘이 들어간 버튼</h1>
      {/* 아이콘이 있는 버튼은 컴포넌트로 사용하지 않고, 스타일을 import 해서 사용 */}
      <ButtonBox
        type="button"
        buttonType="button"
        variant="mint"
        width={161}
        heigth={46}
        fontSize="M"
        fontColor="white"
        isBold
        outline
      >
        <BsFillImageFill className="icon" size={18} />
        이미지 업로드
      </ButtonBox>
      <ButtonBox
        type="button"
        buttonType="button"
        variant="pink"
        width={161}
        heigth={46}
        fontSize="M"
        fontColor="white"
        isBold
        outline
      >
        <BiTrash className="icon" size={23} />
        이미지 제거
      </ButtonBox>
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

export default ButtonPractice;

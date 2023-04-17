import styled from 'styled-components';

function Banner() {
  const imageUrl =
    'https://images.unsplash.com/photo-1626437513709-7ed95e5d0008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80';

  return (
    <BannerContainer>
      <BannerImage src={imageUrl} alt="배너 이미지" />
    </BannerContainer>
  );
}

const BannerContainer = styled.section`
  width: 100%;
  height: 400px;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Banner;

import React from 'react';
import styled from 'styled-components';

export interface Banner {
  alt: string;
  url: string;
}

interface IProps {
  banners: readonly Banner[];
  activeIndex: number;
}

function CarouselList({ banners, activeIndex }: IProps) {
  const nextTransform = activeIndex * 100;

  return (
    <List>
      {banners.map(({ alt, url }) => (
        <Item key={alt} nextTransform={nextTransform}>
          <img src={url} alt={alt} />
        </Item>
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  height: inherit;
  overflow: hidden;
`;

const Item = styled.li<{ nextTransform: number }>`
  width: 100%;
  flex: 1 0 100%;
  transform: translateX(-${({ nextTransform }) => nextTransform}%);
  transition: 200ms ease;

  > img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;

export default CarouselList;

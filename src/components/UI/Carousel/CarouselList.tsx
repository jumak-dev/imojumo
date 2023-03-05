import React from 'react';
import styled from 'styled-components';
import { Banner } from '../../../@type/banner';

interface IProps {
  banners: Banner[];
  activeIndex: number;
}

function CarouselList({ banners, activeIndex }: IProps) {
  const nextTransform = activeIndex * 100;

  return (
    <List>
      {banners.map((banner) => {
        const { alt, url } = banner;
        return (
          <Item key={alt} nextTransform={nextTransform}>
            <img src={url} alt={alt} />
          </Item>
        );
      })}
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

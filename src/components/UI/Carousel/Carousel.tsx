import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CarouselArrowButton from './CarouselArrowButton';
import CarouselList, { Banner } from './CarouselList';

interface IProps {
  banners: Banner[];
  style?: React.CSSProperties;
  isDisplayArrowButton?: boolean;
  interval?: number;
}

function Carousel({
  banners,
  style,
  isDisplayArrowButton = true,
  interval = 3000,
}: IProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () =>
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : banners.length + 1,
    );

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < banners.length - 1 ? prevIndex + 1 : 0,
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, interval);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container style={style}>
      {isDisplayArrowButton && banners.length >= 2 && (
        <CarouselArrowButton pos="left" handleClick={handlePrev} />
      )}
      <CarouselList banners={banners} activeIndex={activeIndex} />

      {isDisplayArrowButton && banners.length >= 2 && (
        <CarouselArrowButton pos="right" handleClick={handleNext} />
      )}
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 450px;
`;

export default Carousel;

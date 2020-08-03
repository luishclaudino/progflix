/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0px;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: -5px;
    bottom: 0;
    margin: auto;
    width: 50px;
    height: 198px;
    transform: initial;
    background-color: rgba(0, 0, 0, 0.7);
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0px;
  }
  .slick-next {
    right: 0px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 5px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

// onMouseLeave={this.someOtherHandler}
const Slider = ({ children }) => (
  <Container >
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      variableWidth: true,
      adaptiveHeight: true,
      centerMode: true,
      centerPadding: "60px",
      focusOnSelect: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;

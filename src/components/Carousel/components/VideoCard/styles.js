import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px;

  p {
    opacity: 0;
  }

  &:hover,
  &:focus {
    width: 450px;
    transition: width .5s;

    p{
      color: white;
      opacity: 1;
      background-color: #000000F3;
      font-size: 21px;
      margin: 0 auto;

      transition: opacity 1s;
    }
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;


import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const HeaderSection = styled.header`
  height: 500px;
  background-image: linear-gradient(90deg, rgba(150, 150, 150, 0.7), rgba(200, 200, 200, 0.8)),
  url("https://i.pinimg.com/originals/9f/69/90/9f69909682f86f41bd95144cd5ec5c60.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-bottom: 10px solid #495057;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  @media (max-width: 750px) {
      font-size: 14px;
  }
`;

export const HeaderWrapper = styled(motion.div)`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled(motion.h1)`
  color: #212529;
  font-size: 4rem;
  margin: 3.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const HeaderButton = styled(motion(Link))`
  text-decoration: none;
  text-align: center;
  width: 20rem;
  margin: 2rem;
  padding: 2rem 0;
  font-size: 2rem;
  color: #212529;
  background-color: #dee2e6;
  border: none;
  border-bottom: 8px solid #495057;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
`;
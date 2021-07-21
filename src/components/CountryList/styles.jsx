import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WrapperSection = styled.section`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  @media (max-width: 750px) {
      font-size: 14px;
  }
`;

export const Wrapper = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CountryList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

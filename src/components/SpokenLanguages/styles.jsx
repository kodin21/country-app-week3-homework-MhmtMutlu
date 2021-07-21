import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WrapperSection = styled.section`
  min-height: 100vh;
  @media (max-width: 750px) {
      font-size: 14px;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LanguageList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  width: 30rem;
  height: 5rem;
  margin: 1rem;
  position: relative;
  border: 2px solid gray;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LanguageRank = styled.p`
  width: 25%;
  font-size: 2rem;
  font-weight: bold;
  padding-right: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const LanguageCardBody = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LanguageName = styled.h3`
  padding-left: 2rem;
`;

export const CountryAmount = styled.p`
padding-left: 0.5rem;
`;

export const Amount = styled.span`
  font-weight: bold;
`;
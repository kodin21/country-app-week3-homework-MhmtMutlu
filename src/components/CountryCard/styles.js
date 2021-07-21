import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  width: 18rem;
  height: 13rem;
  margin: 2rem 1rem;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border: 2px solid gray;
  object-fit: cover;
`;

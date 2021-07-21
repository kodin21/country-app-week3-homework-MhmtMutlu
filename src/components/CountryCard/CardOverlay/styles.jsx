import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  background-color: rgba(220, 220, 220, 0.85);
  backdrop-filter: blur(2px);
`;

export const WrapperContainer = styled(motion.div)`
  position: relative;
  padding: 0 1rem;
`;

export const CountryName = styled.h3`
  text-align: center;
`;

export const CountryDetails = styled.p`
  padding: 5px 0;
  font-size: 14px;
`;

export const CountryData = styled.span`
  padding: 0 5px;
`;

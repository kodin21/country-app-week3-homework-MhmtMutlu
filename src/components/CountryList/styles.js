import styled from 'styled-components';

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

export const CountryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

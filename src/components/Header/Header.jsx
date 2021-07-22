import React from 'react';
import * as Style from './styles';

function Header() {
  return (
    <Style.HeaderSection>
      <Style.HeaderWrapper>
        <Style.HeaderTitle>
          Country App
        </Style.HeaderTitle>
        <Style.ButtonWrapper>
          <Style.HeaderButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            to="/"
          >
            Country List
          </Style.HeaderButton>
          <Style.HeaderButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            to="/statistics"
          >
            Statistics
          </Style.HeaderButton>
        </Style.ButtonWrapper>
      </Style.HeaderWrapper>
    </Style.HeaderSection>
  )
}

export default Header;

import React from 'react';
import { headerItems, headerItem } from '../../motion/variants';
import * as Style from './styles';

function Header() {
  return (
    <Style.HeaderSection>
      <Style.HeaderWrapper variants={headerItems} initial="hidden" animate="show">
        <Style.HeaderTitle
          layout
          variants={headerItem}
        >
          Country App
        </Style.HeaderTitle>
        <Style.ButtonWrapper>
          <Style.HeaderButton
            layout
            variants={headerItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Country List
          </Style.HeaderButton>
          <Style.HeaderButton
            layout
            variants={headerItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Statistics
          </Style.HeaderButton>
        </Style.ButtonWrapper>
      </Style.HeaderWrapper>
    </Style.HeaderSection>
  )
}

export default Header;

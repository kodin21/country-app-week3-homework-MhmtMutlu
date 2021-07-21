import React, { useState } from 'react';
import { card } from '../../motion/variants';
import CardOverlay from './CardOverlay/CardOverlay';
import * as Style from './styles';

function CountryCard({ country }) {
  const [isHovered, setIsHovered] = useState(false);
  const viewOverlay = isHovered && <CardOverlay country={country} />;
  const onMouseOverHandler = () => {
    setIsHovered(true);
  };
  const onMouseLeaveHandler = () => {
    setIsHovered(false);
  };

  return (
    <Style.Card
      layout
      variants={card}
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {viewOverlay}
      <Style.CardImage src={country.flag} />
    </Style.Card>
  );
}

export default CountryCard;

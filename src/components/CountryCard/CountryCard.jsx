import React from 'react';
import * as Style from './styles';

function CountryCard({ country }) {
  return (
    <Style.Card>
      <Style.CardImage src={country.flag} />
    </Style.Card>
  );
}

export default CountryCard;

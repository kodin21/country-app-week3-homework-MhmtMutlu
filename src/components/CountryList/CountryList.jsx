import React from 'react';
import * as Style from './styles';
import CountriesApi from '../../api/CountriesApi';
import CountryCard from '../CountryCard/CountryCard';

function CountryList() {
  const { countries } = CountriesApi();
  
  return (
    <Style.WrapperSection>
      <Style.Wrapper>
        <Style.CountryList>
          {
            countries.map((country) => (
              <CountryCard key={country.name} country={country} />
            ))
          }
        </Style.CountryList>
      </Style.Wrapper>
    </Style.WrapperSection>
  );
}

export default CountryList;

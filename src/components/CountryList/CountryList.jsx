import React, { useEffect, useState } from 'react';
import * as Style from './styles';
import CountriesApi from '../../api/CountriesApi';
import CountryCard from '../CountryCard/CountryCard';
import { countryCards } from '../../motion/variants';

function CountryList() {
  const { countries } = CountriesApi();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (countries.length) {
      setIsLoaded(true)
    }
  }, [countries])

  return (
    <Style.WrapperSection>
      <Style.Wrapper>
        <Style.CountryList variants={countryCards} initial="hidden" animate={isLoaded ? "show" : "hidden"}>
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

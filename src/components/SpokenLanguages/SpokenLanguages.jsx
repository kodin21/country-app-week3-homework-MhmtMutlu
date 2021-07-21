import React, { useEffect, useState } from 'react';
import * as Style from './styles';
import FindPopularLang from '../../utils/FindPopularLang';
import SpokenLanguagesCard from '../SpokenLanguagesCard/SpokenLanguagesCard';
import { countryCards } from '../../motion/variants';

function CountryList() {
  const { popularLanguages } = FindPopularLang();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (popularLanguages.length) {
      setIsLoaded(true)
    }
  }, [popularLanguages])

  return (
    <Style.WrapperSection>
      <Style.Wrapper>
        <Style.LanguageList variants={countryCards} initial="hidden" animate={isLoaded ? "show" : "hidden"}>
          {
            popularLanguages.map((language, index) => (
              <SpokenLanguagesCard
               key={language[0]} 
               index={index} 
               language={language} 
              />
            ))
          }
      </Style.LanguageList>
      </Style.Wrapper>
    </Style.WrapperSection>
  );
}

export default CountryList;

import React from 'react';
import FindPopularLang from '../../utils/FindPopularLang';

function CountryList() {
  const { popularLanguages } = FindPopularLang()

  return (
    <div>
      {
        popularLanguages.map((lang) => (
          <div>{lang[0]} - {lang[1]}</div>
        ))
      }
    </div>
  );
}

export default CountryList;

import React from 'react';
import CountriesApi from '../../api/CountriesApi';

function CountryList() {
  const { countries } = CountriesApi();

  return (
    <div>
      hi
    </div>
  );
}

export default CountryList;

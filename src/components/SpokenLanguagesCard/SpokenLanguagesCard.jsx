import React from 'react'
import * as Style from './styles';
import { card } from '../../motion/variants';

function SpokenLanguagesCard({ language, index }) {
  return (
    <Style.Card
      layout
      variants={card}
    >
      <Style.LanguageRank>
        {index + 1}
      </Style.LanguageRank>

      <Style.LanguageCardBody>
        <Style.LanguageName>
          {language[0]}
        </Style.LanguageName>

        <Style.CountryAmount>
          is talking in <Style.Amount>{language[1]}</Style.Amount> countries.
        </Style.CountryAmount>
      </Style.LanguageCardBody>
    </Style.Card>
  )
}

export default SpokenLanguagesCard

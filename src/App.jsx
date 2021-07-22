import React from 'react';
import CountryList from './components/CountryList/CountryList';
import Layout from './layouts/Layout/Layout';
import Main from './layouts/Main/Main';
// import SpokenLanguages from './components/SpokenLanguages/SpokenLanguages';

function App() {
  return (
    <Layout>
      <Main>
        <CountryList />
        {/* <SpokenLanguages /> */}
      </Main>
    </Layout>
  );
}

export default App;

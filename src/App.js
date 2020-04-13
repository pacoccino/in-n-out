import React from 'react';

import { CssBaseline, Link } from '@material-ui/core';
import styled from 'styled-components';


import TableContainer from './containers/TableContainer';
import Legend from './components/Legend';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AppContent = styled.div`
  width: 90%;
  min-width: 35rem;
  overflow-y: scroll;
  padding: 2rem 0;
`;

const Title = styled.h2`
 
`;
const Description = styled.p`
  text-align: center;
`;

function App() {
  return (
    <>
      <CssBaseline />
      <AppContainer>
        <Title>
          In-n-Out
        </Title>
        <Description>
          Find the crypto on/off ramp that suits you best !
        </Description>
        <AppContent>
          <TableContainer />
        </AppContent>
        <Description>
          <b>We are looking for contributions !</b> If you want to help, please <Link href="https://github.com/pakokrew/in-n-out" target="_blank" rel="noopener noreferrer">contribute to the repo</Link>, or <Link href="https://t.me/cryptoramping" target="_blank" rel="noopener noreferrer">come to chat with us</Link>.
        </Description>
        <Description>
          This is a <Link href="https://github.com/pakokrew/in-n-out" target="_blank" rel="noopener noreferrer">collaborative, not-for-profit, open-source project</Link>.
          <br/> The information provided here may be out-of-date, incomplete or incorrect.
          <br/> For accurate and up-to-date data, please refer to the provider's website directly.
        </Description>
        <Legend/>
      </AppContainer>
    </>
  );
}

export default App;

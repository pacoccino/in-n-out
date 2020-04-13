import React from 'react';

import { CssBaseline } from '@material-ui/core';
import styled from 'styled-components';


import TableContainer from './containers/TableContainer';

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
          This is a list of cryptocurrency on/off ramp solutions.
        </Description>
        <AppContent>
          <TableContainer />
        </AppContent>
      </AppContainer>
    </>
  );
}

export default App;

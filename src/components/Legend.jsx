import React from 'react';
import styled from 'styled-components';

import { Box } from '@material-ui/core';

const Title = styled.h2`
 
`;
const LegendNameTitle = styled.h3`
 
`;

const LegendName = styled.span`
  font-weight: 700;
  margin-right: 5px;
  width: 100px;
  display: inline-block;
`;
const LegendDescription = styled.span`
 
`;

export default function Legend() {
  return (
    <Box pb={4}>
      <Title>Legend</Title>

      <LegendNameTitle>Direction</LegendNameTitle>
      <Box>
        <LegendName>On-Ramp</LegendName>
        <LegendDescription>Buy crypto currencies with fiat</LegendDescription>
      </Box>
      <Box>
        <LegendName>Off-ramp</LegendName>
        <LegendDescription>Sell your crypto to receive fiat</LegendDescription>
      </Box>

      <LegendNameTitle>Methods</LegendNameTitle>
      <Box>
        <LegendName>Credit card</LegendName>
        <LegendDescription>Buy crypto with a credit card</LegendDescription>
      </Box>
      <Box>
        <LegendName>Bank transfer</LegendName>
        <LegendDescription>Regular wire transfer, depending on country (SEPA, ACH, Faster payments, UPI...)</LegendDescription>
      </Box>
      <Box>
        <LegendName>Debit card</LegendName>
        <LegendDescription>Use your crypto to pay in fiat with a credit card</LegendDescription>
      </Box>

    </Box>
  )
}

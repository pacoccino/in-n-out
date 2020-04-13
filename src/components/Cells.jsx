import React from 'react';

import { Link } from '@material-ui/core';

import { providers } from '../lib/data';
import { textMappings } from '../lib/textMappings';

export function renderDirection({ value }) {
  return textMappings.direction[value];
}

export function renderProviders({ value }) {
  const l = value.map(p => providers[p]);

  return l.map(p => (
    <Link href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</Link>
  ))
}

export function renderCountries({ value }) {
  return value.map(v => textMappings.countries[v]).join(', ');
}
export function renderCurrencies({ value }) {
  return value.join(', ');
}
export function renderMethods({ value }) {
  return value.map(v => textMappings.methods[v]).join(', ');
}

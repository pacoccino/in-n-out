import { Direction, providers } from '../lib/data';
import React from 'react';

export function renderDirection({ value }) {
  if(value === Direction.OFF) return 'Off-ramp';
  if(value === Direction.ON) return 'On-ramp';
  return '';
}

export function renderProviders({ value }) {
  const l = value.map(p => providers[p]);

  return l.map(p => (
    <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
  ))
}

export function renderCountries({ value }) {
  return value.join(' ');
}
export function renderCurrencies({ value }) {
  return value.join(' ');
}
export function renderMethods({ value }) {
  return value.join(' ');
}

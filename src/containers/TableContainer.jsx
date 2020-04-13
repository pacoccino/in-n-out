import React, { useMemo } from 'react';

import {
  useTable,
  useFilters,
} from 'react-table';

import { Direction, providers, providersData } from '../lib/data';

import Table from '../components/Table';
import { TextFilter, SelectFilter } from '../components/Filters';
import {
  renderDirection,
  renderProviders,
  renderCountries,
  renderCurrencies,
  renderMethods,
} from '../components/Cells';

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <TextFilter
      value={filterValue || ''}
      onChange={value => setFilter(value || undefined)}
      placeholder={`Search ${count} records...`}
    />
  )
}

function SelectColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      const vs = row.values[id];
      if(Array.isArray(vs)) {
        row.values[id].forEach(v => options.add(v));
      } else {
        options.add(row.values[id])
      }
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  return (
    <SelectFilter
      value={filterValue}
      onChange={value => setFilter(value || undefined)}
      options={options}
    />
  )
}


export default function TableContainer() {

  const data = useMemo(() => providersData, []);
  const columns = useMemo(
    () => [
      {
        Header: 'Direction',
        accessor: 'direction',
        Cell: renderDirection,
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'Providers',
        accessor: 'providers',
        Cell: renderProviders,
      },
      {
        Header: 'Countries',
        accessor: 'countries',
        Cell: renderCountries,
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'Currencies',
        accessor: 'currencies',
        Cell: renderCurrencies,
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'Methods',
        accessor: 'methods',
        Cell: renderMethods,
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
    ],
    []
  );
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const tableData = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
  );

  return (
    <Table tableData={tableData}/>
  );
}

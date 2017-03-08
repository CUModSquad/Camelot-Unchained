/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @Author: JB (jb@codecorsair.com)
 * @Date: 2017-01-30 14:52:18
 * @Last Modified by: JB (jb@codecorsair.com)
 * @Last Modified time: 2017-02-27 11:49:08
 */

import * as React from 'react';
import { graphql, InjectedGraphQLProps } from 'react-apollo';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { StyleSheet, css, StyleDeclaration } from 'aphrodite';
import { Spinner, ColumnDefinition } from 'camelot-unchained';
import GridViewPager from './GridViewPager';
import GroupTitle from './GroupTitle';

export interface OrdersGridStyle extends StyleDeclaration {
  container : React.CSSProperties;
}

export const defaultOrdersGridStyle : OrdersGridStyle = {
  container: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column'
  },
};

export interface OrdersGridQuery {
  orders: {
    totalCount: number;
    data: {
      id: string;
      name: string;
    }[]
  }
}

export interface OrdersGridProps extends InjectedGraphQLProps<OrdersGridQuery> {
  styles?: Partial<OrdersGridStyle>;
  columnDefinitions?: ColumnDefinition[];
  shard: number;
  skip: number;
  itemsPerPage: number;
  filter: string;
  gotoPage: (page: number) => void;
};

function stricmp(a: string, b: string) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a < b ? -1 : b > a ? 1 : 0;
}

function datecmp(a: string, b: string) {
  const da = new Date(a);
  const db = new Date(b);
  return da < db ? -1 : da > db ? 1 : 0;
}

export const defaultOrdersGridColumnDefinitions = [
  {
    key: (m: {name: string}) => m.name,
    title: 'Name',
    sortable: true,
    sortFunction: (a: {name: string}, b: {name: string}) => stricmp(a.name, b.name),
    style: { width: '40%' },
  },
  {
    key: (m: {realm: string}) => m.realm,
    title: 'Realm',
    sortable: true,
    sortFunction: (a: {realm: string}, b: {realm: string}) => stricmp(a.realm, b.realm),
    style: { width: '15%' },
  },
  {
    key: (m: {creator: string}) => m.creator,
    title: 'Creator',
    sortable: true,
    sortFunction: (a: {creator: string}, b: {creator: string}) => stricmp(a.creator, b.creator),
    style: { width: '35%' },
  },
  {
    key: (m: {created: string}) => new Date(m.created).toLocaleDateString(),
    title: 'Created',
    sortable: true,
    sortFunction: (a: {created: string}, b: {created: string}) => datecmp(a.created, b.created),
    style: { width: '10%' },
  },
];

const OrdersGrid = (props : OrdersGridProps) => {

  const ss = StyleSheet.create(defaultOrdersGridStyle);
  const custom = StyleSheet.create(props.styles || {});
  const columnDefs = props.columnDefinitions || defaultOrdersGridColumnDefinitions;

  return (
    <div className={css(ss.container)}>
      { props.data.orders ?
        <GridViewPager
          /* Pager Props */
          gotoPage={props.gotoPage}
          total={props.data.orders.totalCount}
          currentPage={props.skip/props.itemsPerPage}
          /* GridView Props */
          itemsPerPage={props.itemsPerPage}
          items={props.data.orders.data}
          columnDefinitions={columnDefs}
          renderData={{ refetch: props.data.refetch }}
          />
      : <Spinner/>
      }
    </div>
  )
};

const query = gql`
  query OrdersGrid($shard: Int!, $count: Int!, $skip: Int!, $filter: String!) {
    orders(shard: $shard, count: $count, skip: $skip, filter: $filter, includeDisbanded: false)  {
      totalCount,
      data {
        id
        name
        realm
        created
        creator
      }
    }
  }
`;

const options = (props: OrdersGridProps) => {
  return {
    variables: {
      filter: props.filter||"",
      shard: props.shard|0,
      skip: props.skip|0,
      count: props.itemsPerPage|0,
    }
  }
};

const OrdersGridWithQL = graphql(query, { options: options })(OrdersGrid);
export default OrdersGridWithQL;

// @flow
import * as React from 'react';

export type TabsItemType = {
  children: React.Node,
  handleClick: Function,
  icon: string,
  isSelected: boolean,
  label: string,
  value: number | string
};

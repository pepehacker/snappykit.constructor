import * as React from 'react';

export type SidebarType = {
  children: React.Node,
  currentIndex: number,
  info: number | string,
  handleChange: (index: number) => Function,
  tabs: Array<{
    icon: string,
    title: string,
    value: string,
  }>,
  title: number | string,
};

import Nav from '@/components/layout/nav';
import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Nav />
      {children}
    </React.Fragment>
  );
}

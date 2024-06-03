'use client'
import withAuth from '@/components/auth';
import Nav from '@/components/layout/nav';
import React, { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Nav />
      {children}
    </React.Fragment>
  );
}
export default withAuth(Layout);

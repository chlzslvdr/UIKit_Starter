import React, { FC } from 'react';
import Content from './Content';

const Layout: FC = ({ children: any }) => {
  return (
    <section className="layout-section">
      <Content>{children}</Content>
    </section>
  );
};

export default Layout;

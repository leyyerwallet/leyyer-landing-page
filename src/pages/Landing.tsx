import React from 'react';
import NavbarMenu from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Body from '../components/Body/Body.tsx';
import { DashboardSharedProvider } from '../shared/dashboard.shared.tsx';

const Landing: React.FC = () => {
  return (
    <div className="overflow-x-hidden m-0.5">
      <DashboardSharedProvider>
        <NavbarMenu />
        <Body />
        <Footer />
      </DashboardSharedProvider>
    </div>
  );
};

export default Landing;

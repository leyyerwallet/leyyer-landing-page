import React, {useState} from 'react';
import NavbarMenu from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Body from "./components/Body/Body.tsx";
import {DashboardSharedProvider} from "./shared/dashboard.shared.tsx";

type AppProps = {bool: boolean};

const App: React.FC<AppProps> = () => {

  return (
    <div>
      <DashboardSharedProvider>
      <NavbarMenu />
      <Body />
      <Footer />
      </DashboardSharedProvider>
    </div>
  );
};

export default App;

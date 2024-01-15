import React from 'react';
import NavbarMenu from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Body from "./components/Body/Body.tsx";
import {DashboardSharedProvider, useDashboardSharedVariable} from "./shared/dashboard.shared.tsx";

const App: React.FC = () => {
  const signupState = useDashboardSharedVariable();

  return (
    <div>
      <DashboardSharedProvider signupState={signupState}>
      <NavbarMenu />
      <Body />
      <Footer />
      </DashboardSharedProvider>
    </div>
  );
};

export default App;

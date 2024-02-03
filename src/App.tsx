import React from 'react';
import NavbarMenu from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {DashboardSharedProvider, useDashboardSharedVariable} from "./shared/dashboard.shared.tsx";
import About_us from "./components/About_us/About_us.tsx";

const App: React.FC = () => {
  const signupState = useDashboardSharedVariable();

  return (
    <div className="overflow-x-hidden m-0.5">
      <DashboardSharedProvider signupState={signupState}>
      <NavbarMenu />
      <About_us />
      <Footer />
      </DashboardSharedProvider>
    </div>
  );
};

export default App;

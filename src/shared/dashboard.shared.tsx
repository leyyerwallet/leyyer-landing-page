import React, { createContext, ReactNode, useContext, useState } from 'react';

interface SignupState {
  showSignUp: boolean;
  handleSignUp: () => void;
}

const initialSignupState: SignupState | undefined = undefined;

const DashboardSharedContext = createContext<SignupState | undefined>(
  initialSignupState
);

interface DashboardContextProps {
  children: ReactNode;
}

export const DashboardSharedProvider: React.FC<DashboardContextProps> = ({
  children
}) => {
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  const handleSignUp = () => setShowSignUp((prevState) => !prevState);

  const signupState: SignupState = {
    showSignUp,
    handleSignUp
  };

  return (
    <DashboardSharedContext.Provider value={signupState}>
      {children}
    </DashboardSharedContext.Provider>
  );
};

export const useDashboardSharedVariable = (): SignupState => {
  const context = useContext(DashboardSharedContext);
  if (context === undefined) {
    throw new Error(
      'useDashboardSharedVariable must be used within a DashboardSharedProvider'
    );
  }
  return context;
};

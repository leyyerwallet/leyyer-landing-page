import React, {createContext, ReactNode, useContext, useState} from "react";

const DashboardSharedContext = createContext(null as any);

interface SignupState {
    showSignUp: boolean;
    handleSignUp: () => void;
}

interface DashboardContextProps {
    children: ReactNode;
    signupState: SignupState;
}

export const DashboardSharedProvider: React.FC<DashboardContextProps> = ({ children }) => {
    const [showSignUp, setShowSignUp] = useState<boolean>(false);

    const handleSignUp = () => {
        setShowSignUp((prevState) => !prevState);
    }

    const signupState: SignupState = {
        showSignUp: showSignUp,
        handleSignUp: handleSignUp,
    };

    return <DashboardSharedContext.Provider value={signupState}>{children}</DashboardSharedContext.Provider>;
};

export const useDashboardSharedVariable = () => {
    return useContext(DashboardSharedContext);
};

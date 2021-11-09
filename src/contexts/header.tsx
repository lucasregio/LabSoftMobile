import React, { createContext, useState, useContext } from "react";

interface HeaderContextData {
    title: string
    setTitle(title: string): void;
    showHeader: boolean
    setShowHeader(value: boolean): void;
}

const HeaderContext = createContext<HeaderContextData>({} as HeaderContextData);

export const HeaderProvider: React.FC = ({ children }) => {

    const [title, setTitle] = useState<string>('Home');
    const [showHeader, setShowHeader] = useState<boolean>(true);

    return (
        <HeaderContext.Provider value={{title, setTitle, showHeader, setShowHeader}}>
            {children}
        </HeaderContext.Provider>
    )
};

export function useHeader() {
    const context = useContext(HeaderContext);

    return context;
}

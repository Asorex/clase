import { createContext, useState, useContext } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
    const [contextData, setContextData] = useState('');

    const valor = { contextData, setContextData };

    return (
        <DataContext.Provider value={valor} >
            {props.children}
            </DataContext.Provider>
    )
}

export function useDataContext () {

    const context = useContext(DataContext);
    if (!context) {
        throw new Error ('useDataContext must be used within a DataContextProvider');
    }
    return context;
}
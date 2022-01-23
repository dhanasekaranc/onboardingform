import { useState,useContext,createContext } from "react";

export const DataContext = createContext();

const initState = { fullName:"", displayName:"", workspaceName:"",workspaceURL:"",team:""}

const DataProvider = ({children}) => {
    const [data, setData] = useState(initState);

    return (
        <DataContext.Provider value={{data,setData}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
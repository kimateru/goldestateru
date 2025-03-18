import { createContext, useContext } from "react";
import { getUser } from "./appwrite";
import { useAppwrite } from "./useAppwrite";

interface User {
    $id: string;
    name: string;
    email: string;
    avatar: string;
}

interface GlobalContextType {
    isLoggedIn: boolean;
    user: User | null;
    loading: boolean;
    refetch: () => Promise<void>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({children}: {children: React.ReactNode}) => {
    const {data: user, loading, error, refetch} = useAppwrite({fn: getUser});

    const isLoggedIn = !!user;
    // !null => !true => false
    // !{name: "John"} => !false => true

    return (
        <GlobalContext.Provider value={{isLoggedIn, user , loading, refetch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
}

import { createContext, useState, useEffect, useContext } from "react";
//Context for global use (login state)
//https://learn-2.galvanize.com/cohorts/3853/blocks/1142/content_files/lessons/useContext.md
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [LoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8081/cookie", { credentials: "include" })
            .then((res) => res.json())
            .then((data) => {
                if (data.verified) {
                    setLoggedIn(true);
                } else {
                    setLoggedIn(false);
                }
            })
            .catch((error) => {
                console.error("Fail:", error);
            });
    }, []);

    return (
        <AuthContext.Provider value={{ LoggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

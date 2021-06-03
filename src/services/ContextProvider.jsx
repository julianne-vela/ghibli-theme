import { createContext, useContext, useState, useEffect } from 'react';
import { getCharacters } from '../pages/api/charactersApi';

const GhibliContext = createContext();

export function ContextProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [theme, setTheme] = useState('');

    const handleThemeChange = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        getCharacters()
            .then((results) => setCharacters(results))
            .finally(() => setLoading(false));
    }, []);

    let sharedState = { loading, characters, theme, handleThemeChange };

    return (
        <GhibliContext.Provider value={sharedState}>
            {children}
        </GhibliContext.Provider>
    );
}

export function useContextProvider() {
    return useContext(GhibliContext);
}

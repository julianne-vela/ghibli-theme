import { createContext, useContext, useState, useEffect } from 'react';
import { getCharacters } from '../pages/api/charactersApi';

const GhibliContext = createContext();

export function ContextProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [theme, setTheme] = useState('');

    // const handleThemeChange = ({target: {value}}) => {

    // }

    useEffect(() => {
        getCharacters()
            .then((results) => setCharacters(results))
            .finally(() => setLoading(false));
    }, []);

    let sharedState = { loading, characters };

    return (
        <GhibliContext.Provider value={sharedState}>
            {children}
        </GhibliContext.Provider>
    );
}

export function useContextProvider() {
    return useContext(GhibliContext);
}

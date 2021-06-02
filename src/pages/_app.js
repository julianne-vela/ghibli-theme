import { ContextProvider } from '../services/ContextProvider';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ContextProvider>
                <Component {...pageProps} />
            </ContextProvider>
        </>
    );
}

export default MyApp;

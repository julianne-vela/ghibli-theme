import { ContextProvider } from '../services/ContextProvider';
import '../../build/baseline.css';

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

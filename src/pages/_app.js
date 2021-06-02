import 'tailwindcss/tailwind.css';
import { ContextProvider } from '../services/ContextProvider';

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

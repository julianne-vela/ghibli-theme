import { useContextProvider } from '../../services/ContextProvider';
import Link from './Link';

function Header() {
    const { theme, handleThemeChange } = useContextProvider();

    return (
        <header className='bg-black'>
            <h1 className='light:text-black.bg-beige dark:text-black.bg-beige'>
                Ghiblist
            </h1>
            <button className='btn' onClick={handleThemeChange}>
                {theme === 'light' ? 'Dark' : 'Light'}
            </button>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/characters'>Characters</Link>
                <Link href='/about'>About</Link>
            </nav>
        </header>
    );
}

export default Header;

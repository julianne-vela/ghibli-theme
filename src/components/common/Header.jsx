import { darkMode } from '../../../tailwind.config';
import Link from './Link';

function Header() {
    const handleThemeChange = () => {
        console.log('Theme changed!');
    };
    return (
        <header className='bg-black'>
            <h1>Ghiblist</h1>
            <button className='btn' onClick={handleThemeChange}>
                Toggle Dark Mode
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

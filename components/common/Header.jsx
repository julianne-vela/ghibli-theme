import Link from './Link';

function Header() {
    return (
        <header>
            <h1>Ghiblist</h1>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/characters'>Characters</Link>
                <Link href='/about'>About</Link>
            </nav>
        </header>
    );
}

export default Header;

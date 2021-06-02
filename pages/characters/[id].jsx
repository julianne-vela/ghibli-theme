import { useRouter } from 'next/router';
import Header from '../../components/common/Header';
import CharacterDetails from '../../components/characters/CharacterDetails';
import { useContextProvider } from '../../services/ContextProvider';

function CharacterById() {
    const { loading, characters } = useContextProvider();
    const router = useRouter();
    const { id } = router.query;

    const thisCharacter = characters.find((item) => item.id === id);

    return (
        <>
            <Header />
            <main className='container'>
                {loading ? (
                    'Loading...'
                ) : (
                    <CharacterDetails character={thisCharacter} />
                )}
            </main>
        </>
    );
}

export default CharacterById;

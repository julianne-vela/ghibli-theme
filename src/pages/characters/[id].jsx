import Header from '../../components/common/Header';
import CharacterDetails from '../../components/characters/CharacterDetails';

function CharacterById() {
    return (
        <>
            <Header />
            <main className='container'>
                <CharacterDetails />
            </main>
        </>
    );
}

export default CharacterById;

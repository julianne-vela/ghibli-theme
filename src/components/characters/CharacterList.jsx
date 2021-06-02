import Link from '../common/Link';
import { useContextProvider } from '../../services/ContextProvider';
import CharacterItem from './CharacterItem';

function CharacterList() {
    const { loading, characters } = useContextProvider();

    return (
        <ul>
            {loading
                ? 'Loading...'
                : characters.map((character) => (
                      <Link
                          asPath={`characters/${character.name}`}
                          href={`/characters/${character.id}`}
                          key={character.id}
                      >
                          <CharacterItem {...character} />
                      </Link>
                  ))}
        </ul>
    );
}

export default CharacterList;

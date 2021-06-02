import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getById } from '../../pages/api/charactersApi';

function CharacterDetails() {
    const router = useRouter();
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    // const router = useRouter();
    // const { id } = await router.query;

    useEffect(() => {
        const { id } = router.query;
        getById(id)
            .then((results) => setCharacter(results))
            .finally(() => setLoading(false));
    }, []);

    return loading ? (
        'Loading...'
    ) : (
        <section>
            <h2>About {character.name}</h2>
            <section id='details'>
                <p>Name: {character.name}</p>
                <p>Age: {character.age}</p>
                <p>Films: {character.film}</p>
                <p>Eye Color: {character.eyeColor}</p>
                <p>Hair Color: {character.hairColor}</p>
                <p>Species: {character.species}</p>
                <p>Learn More: {character.url}</p>
            </section>
        </section>
    );
}

export default CharacterDetails;

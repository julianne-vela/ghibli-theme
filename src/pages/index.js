import React from 'react';
import CharacterList from '../components/characters/CharacterList';
import Header from '../components/common/Header';
import { useContextProvider } from '../services/ContextProvider';

function Home() {
    const { loading, characters } = useContextProvider();

    return (
        <>
            <Header />
            <main className='container'>
                <aside>
                    <section>PageNav</section>
                    <section>Search</section>
                    <section>Filter</section>
                    <section>Sort</section>
                </aside>
                <section className='listView'>
                    <CharacterList />
                </section>
            </main>
        </>
    );
}

export default Home;

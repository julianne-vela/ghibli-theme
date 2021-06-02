import React from 'react';
import CharacterList from '../components/characters/CharacterList';
import Header from '../components/common/Header';
import { useContextProvider } from '../services/ContextProvider';

function Home() {
    const { loading } = useContextProvider();

    return (
        <>
            <Header />
            <main className='container mx-auto grid gridTemplateColumns.12 gridTemplateRows.12 gap-1 justify-center items-center'>
                <aside className='grid col-span-4'>
                    <section>PageNav</section>
                    <section>Search</section>
                    <section>Filter</section>
                    <section>Sort</section>
                </aside>
                {loading ? (
                    'Loading...'
                ) : (
                    <section className='grid col-span-8'>
                        <CharacterList />
                    </section>
                )}
            </main>
        </>
    );
}

export default Home;

function CharacterDetails(name, age, films, eyeColor, hairColor, species, url) {
    return (
        <section>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Films: {films}</p>
            <p>Eye Color: {eyeColor}</p>
            <p>Hair Color: {hairColor}</p>
            <p>Species: {species}</p>
            <p>Learn More: {url}</p>
        </section>
    );
}

export default CharacterDetails;

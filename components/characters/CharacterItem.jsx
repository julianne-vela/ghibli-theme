function CharacterItem(character) {
    return (
        <li className='listItem'>
            <span>Name: {character.name}</span>
            <span>Age: {character.age}</span>
            <span>Films: {character.films}</span>
        </li>
    );
}

export default CharacterItem;

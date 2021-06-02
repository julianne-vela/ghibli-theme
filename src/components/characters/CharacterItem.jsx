function CharacterItem(character) {
    return (
        <li className='listItem'>
            <span>Name: {character.name}</span>
            <span>Age: {character.age}</span>
            {/* <span>Film: {character.film}</span> */}
        </li>
    );
}

export default CharacterItem;

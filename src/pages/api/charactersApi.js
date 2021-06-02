/**
 * {
 *  id: string,
 *  name: string,
 *  gender: string,
 *  age: string,
 *  eye_color: string,
 *  hair_color: string,
 *  films: array[string],
 *  species: string,
 *  url: string
 * }
 */

export const getCharacters = async () => {
    const res = await fetch('https://ghibliapi.herokuapp.com/people');

    const results = await res.json();

    return results.map(({ eye_color, hair_color, films, ...character }) => ({
        ...character,
        film: films[0],
        hairColor: hair_color,
        eyeColor: eye_color,
    }));
};

export const getById = async (currentId) => {
    const res = await fetch(
        `https://ghibliapi.herokuapp.com/people/${currentId}`
    );

    const {
        id,
        name,
        gender,
        age,
        eye_color,
        hair_color,
        films,
        species,
        url,
    } = await res.json();

    return {
        id: id,
        name: name,
        gender: gender,
        age: age,
        eyeColor: eye_color,
        hairColor: hair_color,
        film: films,
        species: species,
        url: url,
    };
};

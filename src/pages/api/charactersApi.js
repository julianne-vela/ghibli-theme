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

    // results > [i] > .films

    results.forEach((item) => {});

    console.log(results);

    return results.map(({ eye_color, hair_color, ...character }) => ({
        ...character,
        hairColor: hair_color,
        eyeColor: eye_color,
    }));
};

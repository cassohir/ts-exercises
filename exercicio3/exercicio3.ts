import axios from "axios";

// Exercício 3 - Consumo de api....
interface Personagens {
    nome: string;
    genero: string;
    avatarUrl: string;
    especie: string;
}


async function getRickAndMortyCharacters(): Promise<Personagens[]> {
    const personagensToGet = ['Rick Sanchez', 'Morty Smith', 'Summer Smith', 'Beth Smith', 'Jerry Smith'];
    const apiURLS = personagensToGet.map(personagemProp => `https://rickandmortyapi.com/api/character/?name=${personagemProp}`);
    const responses = await Promise.all(apiURLS.map(url => axios.get(url)));
    const personagens = responses.map(response => response.data.results[0]);


    const personagensFormatados: Personagens[] = personagens.map(personagem => {
        return {
            nome: personagem.name,
            genero: personagem.gender,
            avatarUrl: personagem.image,
            especie: personagem.species
        }
    });
    return personagensFormatados;
}

module.exports = getRickAndMortyCharacters;

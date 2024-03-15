import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/pokemons/interfaces/pokemos-response";
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";
import Image from "next/image";

// Definición de la función getPokemons                 Aqui le damos la estructura (INTERFACE)
const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    // Realizar una solicitud a la API de PokeAPI 
    //          Que tipo de data que espero
    const data: PokemonsResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then((res) => res.json());
  
    // Mapear los resultados para obtener un array de SimplePokemon
    const pokemons = data.results.map((pokemon) => ({
        // Aqui basicamente corta la url entre / y muestra la ante penultima -2
                //url.split('/')- Corta todo en un arreglo  
                //url.split('/').at(-2) - Corta todo en un arreglo y me trae la posicion antepenultima del arreglo del URL
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }));
  
    // throw new Error("Error")
    // Devolver el array de SimplePokemon  
    return pokemons;
  };

export default async function PokemonsPage() {

    const pokemons = await getPokemons(150);
    
  return (
    <div className="flex flex-col">

        <span className="text-5xl my-2 ">Listado de Pokemons <small>Statico</small></span>

        <PokemonGrid pokemons={pokemons}/>
    </div>
  )
}

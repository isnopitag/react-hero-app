import { heroes } from "../../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {
    console.log("publisher", publisher)

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if(!validPublisher.includes(publisher)){
        throw new Error(`Publisher "${publisher}" `);
    }

    return heroes.filter( h => h.publisher === publisher);
}
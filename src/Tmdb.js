const API_KEY = '4ba747990f613ab6a3e57f77fa378b21';
const API_BASE = 'https://api.themoviedb.org/3';

/**
 * filmes originais
 * recomendados (treading)
 * em alta (toprated)
 * ação
 * comédia
 * terror
 * romance
 * documentario
 */

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json(); 
    return json;
}


export default {
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_geners=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_geners=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
               items: await basicFetch(`/discover/movie?with_geners=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
               items: await basicFetch(`/discover/movie?with_geners=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentario',
               items: await basicFetch(`/discover/movie?with_geners=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }
}
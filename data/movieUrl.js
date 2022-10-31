const API_KEY = "b93a64480573ce5248c28b200d79d029";

export default [
    {
        id:"0",
        name:"Top Rated",
        url:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    {
        id:"1",
        name:"Action Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,

    },
    {
        id:"10",
        name:"Hindi Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=hi&year=2021`
    },
    {
        id:"2",
        name:"Comedy Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    {
        id:"3",
        name:"Horror Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    {
        id:"4",
        name:"Kannada Block Busters",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=kn&year=2022`
    },
    {
        id:"4",
        name:"Romance Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    {
        id:"5",
        name:"Netflix Orginals",
        url:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
    }
]
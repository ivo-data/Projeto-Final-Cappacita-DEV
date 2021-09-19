const API_KEY = 'api_key=27c5c9029a3920252346c90982ef072a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL +'/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;
const main = document.getElementById('main');



getMovies(API_URL);

function getMovies(url) {
  lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
        
    })
}
function showMovies(data){
    main.innerHTML = '';
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
    
    movieEl.innerHTML = 
    `
    <img src="${poster_path? IMG_URL+poster_path:"http://via.placeholder.com/1080x1580" }" alt="${title}>
   
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="g${getColor(vote_average)}">${vote_average}"</span>
    </div>
    
    <div class="overview">
    <h3> overview <h3>
    ${overview}
    </div>
    `
    main.appendChild(movieEl);

    })
   
}


function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}

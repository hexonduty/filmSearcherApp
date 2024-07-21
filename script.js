const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const movieResults = document.getElementById('movieResults');
const apiKey = '1580b78f1efb53f170e7f4d0258ba40a';

searchButton.addEventListener('click',function(){
    const query = searchInput.value;
    if(query){
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

        fetch(url)
            .then(Response => Response.json())
            .then(data => {
                displayMovies(data.results);
            })
            .catch(error => console.error('Error', error));
    }
});

function displayMovies(movies){
    movieResults.innerHTML = '';

    if(movieResults === 0){
        movieResults.innerHTML = `<p>No movies found.</p>`;
        return;
    }

    movies.forEach(movie =>{
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
         <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <div id="movieDesc">
        <h2>${movie.title}</h2>
        <p>${movie.overview}</p>
        </div>
        `;
        movieResults.appendChild(movieDiv);
    });
};

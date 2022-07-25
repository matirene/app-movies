const movies = require ('./movies.js');

const moviesDH = {
    listMovies : function(){
        movies.forEach(function(movie, indice){
        console.log("La pelicula n° " + (indice + 1) + " es: " + movie.title);
        })
        },
    searchMovie: function (parametro) {
        const searchPeli = movies.find( function (peliculas){
            return peliculas.id == parametro || peliculas.title === parametro;
        })
        if (searchPeli === undefined){
            return null;
        }
        console.log("Peliculas del Id o Titulo Buscado: " + parametro);
        return searchPeli;
        },
    searchMoviesByGenre: function (genero) {
        const searchPeliByGenre = movies.filter(function (elementos){
            return elementos.genre === genero;
        })
        console.log("Peliculas del Género Buscado: " + genero);
        return  searchPeliByGenre;
        },
    totalPrice: function(){
        let arrayPrecios = [];
        movies.forEach(function(precio){
            arrayPrecios.push(precio.price)
        })
        const priceTotal = arrayPrecios.reduce(function(acumulador, elemento){
        return acumulador + elemento;
        }, 0)
        return "El valor total de las peliculas registradas: $" + priceTotal;
        },
    changeMovieGenre: function(id, newGenre){
        const peliBuscada = this.searchMovie(id);
        peliBuscada.genre = newGenre;
        return peliBuscada;
    } 
}


moviesDH.listMovies();
console.log("------------------");
console.log(moviesDH.searchMovie("Que paso ayer 3"));
console.log("------------------");
console.log(moviesDH.searchMovie("0001"));
console.log("------------------");
console.log(moviesDH.searchMoviesByGenre('Animación'));
console.log("------------------")
console.log(moviesDH.totalPrice());
console.log("------------------");
console.log(moviesDH.changeMovieGenre("0003", "Acción"));

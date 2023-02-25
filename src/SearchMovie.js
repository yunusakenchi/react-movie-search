import React from 'react'
import MovieCard from './MovieCard'

function SearchMovie() {
    const [query, setQuery] = React.useState('')
    const [movies, setMovies] = React.useState([])

    const SearchMovie = async (e) => {
        e.preventDefault();
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=3ea8ffbbc5c3b570fb1bd3dbeef4fe92&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const result = await fetch(url)
            const data = await result.json()
            setMovies(data.results)
        } catch (err) {
            console.log(err)
        }
    }

    const inputChange = (e) => {
        setQuery(e.target.value)
    }
    const enterBtn = (e) => {
        if (e.keyCode === 13) {
            setQuery(e.target.value)
        }
    }
    const movieList = movies.filter(movie => movie.backdrop_path).map(movie => (
        <MovieCard key={movie.id} movie={movie}/>
    ))

  return (
    <div>
        <form className='form' onSubmit={SearchMovie}>
            <label htmlFor='query' className='query'>Movie Name</label>
            <input type='text' name='query' 
                placeholder="i.e Black Panther"
                onChange={inputChange}
                onKeyDown={enterBtn}
                value={query} 
            />
            <button className='btn' type='submit'>Submit</button>
        </form>
        <div className='card-list'>
            {movieList}
        </div>
    </div>
  )
}

export default SearchMovie

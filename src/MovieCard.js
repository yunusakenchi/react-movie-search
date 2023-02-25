import React from 'react'

function MovieCard(props) {
  return (
    <div className="card" key={props.movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${props.movie.backdrop_path}`}
                className='card-image'
                alt={props.movie.title + ' ' + 'poster'}
             />
            <div className='card-content'>
                <h3 className='card-title'>{props.movie.title}</h3>
                <p><small>RELEASE DATE: {props.movie.release_date}</small></p>
                <p><small>Rating: {props.movie.vote_average}</small></p>
                <p className='card-desc'>{props.movie.overview}</p>
            </div>
        </div>
  )
}

export default MovieCard

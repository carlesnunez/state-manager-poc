import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from '../../components/card/movie/src'
import SuiFluxConnector from '../../sui-flux-connector'

// eslint-disable-next-line
const T = ({store: {movie}, moviesList}, {domain}) => {
  const favorites = (movie && movie.favorites) || []
  console.log(favorites, movie)
  return (
    <div>
      <h2>Movies list</h2>
      {moviesList.map(movie => (
        <div
          style={{
            backgroundColor: favorites.find(f => f.movieId === movie.movieId)
              ? 'green'
              : 'white'
          }}
        >
          <button
            onClick={() =>
              domain
                .get('add_movies_to_favorites_use_case')
                .execute([...favorites, movie])
            }
          >
            Add to favorite
          </button>
          <MovieCard {...movie} />
        </div>
      ))}
    </div>
  )
}
T.propTypes = {
  moviesList: PropTypes.array
}
T.contextTypes = {domain: PropTypes.object}

export default SuiFluxConnector(T, [
  ['movie', data => !console.log(data[0]) && data[0]]
])

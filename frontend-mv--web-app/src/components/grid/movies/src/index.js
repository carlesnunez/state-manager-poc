import React, {Component} from 'react'
import PropTypes from 'prop-types'

import MovieCard from 'mv-card-movie'

class GridMovies extends Component {
  render () {
    const {movies, cardAction: action} = this.props;

    return (
      <div className='mv-GridMovies'>
        {movies.map(movie => (
          <MovieCard
            key={movie.movieId}
            action={action}
            {...movie}
          />
        ))}
      </div>
    )
  }
}

GridMovies.displayName = 'GridMovies'

GridMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  cardAction: PropTypes.func.isRequired,
}

GridMovies.defaultProps = {
  movies: [],

}

export default GridMovies
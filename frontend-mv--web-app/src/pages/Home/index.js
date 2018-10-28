import React from 'react'
import PropTypes from 'prop-types'
import FormSearch from '../../components/form/search/src'
import MoviesContainer from '../../containers/moviesContainer/index'
const moviesList = [
  {
    movieId: 1,
    posterPath:
      'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    name: 'Best movie ever one',
    overview: 'Just an overview test'
  },
  {
    movieId: 2,
    posterPath:
      'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    name: 'Best movie ever two',
    overview: 'Just an overview test'
  },
  {
    movieId: 3,
    posterPath:
      'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    name: 'Best movie ever three',
    overview: 'Just an overview test'
  },
  {
    movieId: 4,
    posterPath:
      'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    name: 'Best movie ever four',
    overview: 'Just an overview test'
  },
  {
    movieId: 5,
    posterPath:
      'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    name: 'Best movie ever five',
    overview: 'Just an overview test'
  },
  {
    movieId: 6,
    posterPath:
      'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    name: 'Best movie ever six',
    overview: 'Just an overview test'
  },
  {
    movieId: 7,
    posterPath:
      'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    name: 'Best movie ever seven',
    overview: 'Just an overview test'
  }
]
const Home = (_, {i18n}) => (
  <React.Fragment>
    <h1>Home test title</h1>
    <FormSearch action={searchvalue => console.log(searchvalue)} />
    <MoviesContainer moviesList={moviesList} />
  </React.Fragment>
)

Home.contextTypes = {i18n: PropTypes.object}

export default Home

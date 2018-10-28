import FavoriteMoviesListValueObject from './FavoriteMoviesListValueObject'

class FavoriteMoviesListValueObjectFactory {
  static favoriteMoviesListValueObject = rawValueObject =>
    new FavoriteMoviesListValueObject(rawValueObject)
}

export default FavoriteMoviesListValueObjectFactory

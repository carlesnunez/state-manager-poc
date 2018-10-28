import AddMoviesToFavorites from './AddMoviesToFavoritesService'
import FavoriteMoviesListValueObjectFactory from '../ValueObjects/factory'
export default class AdServicesFactory {
  static addMoviesToFavorites = ({config}) =>
    new AddMoviesToFavorites({
      favoriteMoviesListValueObject: FavoriteMoviesListValueObjectFactory.favoriteMoviesListValueObject,
    })
}

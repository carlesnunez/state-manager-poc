import {Service} from '@s-ui/domain'

export default class AddMoviesToFavoritesService extends Service {
  constructor({favoriteMoviesListValueObject} = {}) {
    super()
    this._favoriteMoviesListValueObject = favoriteMoviesListValueObject
  }

  execute(moviesList) {
    return this._favoriteMoviesListValueObject({
      favorites: moviesList
    })
  }
}

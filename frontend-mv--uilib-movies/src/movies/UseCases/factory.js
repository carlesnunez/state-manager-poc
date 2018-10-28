import AddMoviesToFavoritesUseCase from './AddMoviesToFavoritesUseCase'
import MovieServiceFactory from '../Services/factory'

class MovieUseCasesFactory {
  static addMoviesToFavoritesUseCase = ({config}) =>
    new AddMoviesToFavoritesUseCase({
      movieService: MovieServiceFactory.addMoviesToFavorites({
        config
      })
    })
}

export default MovieUseCasesFactory

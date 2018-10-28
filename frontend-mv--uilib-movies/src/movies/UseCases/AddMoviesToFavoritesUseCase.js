import {UseCase} from '@s-ui/domain'
import {store} from '../../../sui-flux/use-case-observer'

@store('movie')
class AddMoviesToFavoritesUseCase extends UseCase {
  constructor({movieService}) {
    super()
    this._movieService = movieService
  }

  async execute(movies) {
    const moviesListVO = await this._movieService.execute(movies)

    return moviesListVO.toJSON()
  }
}

export default AddMoviesToFavoritesUseCase

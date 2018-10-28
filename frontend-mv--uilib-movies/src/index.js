import {EntryPointFactory} from '@s-ui/domain'
import MovieUseCasesFactory from './movies/UseCases/factory'
import alt from '../sui-flux/alt'

const config = {}

const useCases = {
  add_movies_to_favorites_use_case: MovieUseCasesFactory.addMoviesToFavoritesUseCase(
    {config}
  )
}

const EntryPoint = EntryPointFactory({config, useCases})

export default class {
  constructor() {
    const t = new EntryPoint()
    t.flux = alt
    return t
  }
}

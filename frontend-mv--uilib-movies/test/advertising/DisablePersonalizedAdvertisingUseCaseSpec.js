import {HttpMocker} from '@s-ui/mockmock'
import Milanuncios from '../../src'

let domain
const mocker = new HttpMocker()

describe('disable_personalized_advertising', () => {
  beforeEach(() => {
    domain = new Milanuncios()
    mocker.create()
  })

  it('given app nexus disable ads url it should do the request well', async () => {
    mocker
      .httpMock('https://secure.adnxs.com')
      .get('/seg?add=12719972&t=1')
      .reply({}, 200)
    await domain.get('disable_personalized_advertising').execute()
  })
})

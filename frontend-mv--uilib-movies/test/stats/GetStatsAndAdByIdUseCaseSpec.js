import {expect} from 'chai'
import {HttpMocker} from '@s-ui/mockmock'
import Milanuncios from '../../src'
import adStatsFixture from '../fixtures/stats/detailedAdStatistics'
import adResponse from '../fixtures/stats/adResponse'

let domain
const mocker = new HttpMocker()

describe('get_stats_and_ad_by_id_use_case', () => {
  beforeEach(() => {
    domain = new Milanuncios()
    mocker.create()
  })

  afterEach(() => {
    domain = null
    mocker.restore()
  })

  it('given an ID it should return a response object with the JSON of adEntity and statsValueObject', done => {
    mocker
      .httpMock(
        `${domain._config.get('API_BASE_MONOLITH_URL')}/${domain._config.get(
          'API_BASE_MONOLITH_VERSION'
        )}/vip`
      )
      .get(`/anuncio.php?id=234039763`)
      .reply(adResponse, 200)
    domain
      .get('get_stats_and_ad_by_id_use_case')
      .execute({adId: 234039763})
      .then(adStatsResponse => {
        expect(adStatsResponse).to.deep.equal(adStatsFixture)
        done()
      })
  })
})

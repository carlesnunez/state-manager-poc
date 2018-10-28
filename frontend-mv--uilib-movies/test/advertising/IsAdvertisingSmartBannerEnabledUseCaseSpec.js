import {expect} from 'chai'
import {HttpMocker} from '@s-ui/mockmock'
import Milanuncios from '../../src'
import cookie from '@s-ui/js/lib/cookie'
import {descriptorsByEnvironmentPatcher} from '@s-ui/test/lib/descriptor-environment-patcher'
descriptorsByEnvironmentPatcher()
let domain
const mocker = new HttpMocker()

describe.client('disable_personalized_advertising', () => {
  beforeEach(() => {
    domain = new Milanuncios()
    mocker.create()
    cookie.set(
      domain.get('config').get('COOKIES').COOKIE_AD_SMART_BANNER_NAME,
      undefined
    )
  })

  it('should return undefined as we do not have the cookie setted', done => {
    domain
      .get('is_advertising_smartbanner_enabled')
      .execute()
      .then(response => {
        expect(response).to.be.equal('undefined')
        done()
      })
  })
})

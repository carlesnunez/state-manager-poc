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
  })

  it('should return undefined as we do not have the cookie setted', done => {
    console.log(cookie.get('isSmartBannerDisabled')) // eslint-disable-line
    domain
      .get('disable_advertising_smart_banner')
      .execute()
      .then(response => {
        expect(response).to.be.equal('isSmartBannerDisabled=true; path=/')
        done()
      })
  })
})

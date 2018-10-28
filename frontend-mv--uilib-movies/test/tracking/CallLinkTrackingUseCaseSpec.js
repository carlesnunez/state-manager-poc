import {expect} from 'chai'
import Milanuncios from '../../src'
import {descriptorsByEnvironmentPatcher} from '@s-ui/test/lib/descriptor-environment-patcher'
descriptorsByEnvironmentPatcher()

let domain

describe.client('call_link_tracking_use_case', () => {
  beforeEach(() => {
    domain = new Milanuncios()
    window.utag = {
      link: function(data, callback) {
        callback()
      }
    }
  })

  it('Domain instance should exist', () => {
    expect(domain).not.to.be.eq(undefined)
  })

  it('Should return the expected utag object', async () => {
    const PAGES = domain.get('config').get('PAGES')
    const event = 'ad_filter'
    const data = {filters: 'coche deportivo'}

    const expectedUtagDataAdFilterHomeEvent = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...window.utag_data,
      ...domain.get('config').get('TRACKING_EVENTS')[PAGES.HOME][event],
      ...data
    }

    const utagLink = await domain
      .get('call_link_tracking_use_case')
      .execute({page: PAGES.HOME, event, data})

    expect(utagLink).to.deep.equal(expectedUtagDataAdFilterHomeEvent)
  })
})

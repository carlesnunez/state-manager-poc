import {expect} from 'chai'
import Milanuncios from '../../src'
import {descriptorsByEnvironmentPatcher} from '@s-ui/test/lib/descriptor-environment-patcher'
import {
  legalPoliticaPrivacidad,
  legalAlertas,
  legalPartnersSecundarios,
  legalIndice,
  legalTransparencia,
  legalInformacionBasicaProteccionDatos,
  legalCondicionesUso,
  legalPublicidadPerfilada,
  legalPoliticaCookies,
  legalEmailingsPublicitarios,
  creditosAutoRenueva
} from '../fixtures/tracking/trackingDefinitionsByPage'
descriptorsByEnvironmentPatcher()

let domain

describe.client('call_tracking_by_path_use_case', () => {
  beforeEach(() => {
    domain = new Milanuncios()
    window.utag = {
      view: function(data, callback) {
        callback()
      }
    }
  })

  it('given LEGAL_PRIVACY_POLICY it should return a valid tracking definition and call track successfully', done => {
    const PAGES = domain.get('config').get('PAGES')
    const expectedUtagData = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...domain.get('config').get('TRACKING').VIEW_TRACKING_DEFINITION_BY_PAGE[
        PAGES.LEGAL_PRIVACY_POLICY
      ],
      ...legalPoliticaPrivacidad
    }
    domain
      .get('call_view_tracking_use_case')
      .execute({page: PAGES.LEGAL_PRIVACY_POLICY})
      .then(utagData => {
        expect(utagData).to.deep.equal(expectedUtagData)
        done()
      })
  })

  it('given data to the function it will be setted into utag_data', done => {
    const PAGES = domain.get('config').get('PAGES')
    const expectedUtagData = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...domain.get('config').get('TRACKING').VIEW_TRACKING_DEFINITION_BY_PAGE[
        PAGES.LEGAL_PRIVACY_POLICY
      ],
      ...legalPoliticaPrivacidad,
      page_name: 'testing page name'
    }
    domain
      .get('call_view_tracking_use_case')
      .execute({
        page: PAGES.LEGAL_PRIVACY_POLICY,
        data: {page_name: 'testing page name'}
      })
      .then(utagData => {
        expect(utagData).to.deep.equal(expectedUtagData)
        done()
      })
  })

  it('given PAGES.LEGAL_AD_PROFILED it should return a valid tracking definition and call track successfully', done => {
    const PAGES = domain.get('config').get('PAGES')
    const expectedUtagData = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...domain.get('config').get('TRACKING').VIEW_TRACKING_DEFINITION_BY_PAGE[
        PAGES.LEGAL_AD_PROFILED
      ],
      ...legalPublicidadPerfilada
    }
    domain
      .get('call_view_tracking_use_case')
      .execute({page: PAGES.LEGAL_AD_PROFILED})
      .then(utagData => {
        expect(utagData).to.deep.equal(expectedUtagData)
        done()
      })
  })

  it('given PAGES.LEGAL_SECONDARIES_PARTNERS it should return a valid tracking definition and call track successfully', done => {
    const PAGES = domain.get('config').get('PAGES')
    const expectedUtagData = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...domain.get('config').get('TRACKING').VIEW_TRACKING_DEFINITION_BY_PAGE[
        PAGES.LEGAL_SECONDARIES_PARTNERS
      ],
      ...legalPartnersSecundarios
    }
    domain
      .get('call_view_tracking_use_case')
      .execute({page: PAGES.LEGAL_SECONDARIES_PARTNERS})
      .then(utagData => {
        expect(utagData).to.deep.equal(expectedUtagData)
        done()
      })
  })

  it('given /legal/alertas it should return a valid tracking definition and call track successfully', done => {
    const PAGES = domain.get('config').get('PAGES')
    const expectedUtagData = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...domain.get('config').get('TRACKING').VIEW_TRACKING_DEFINITION_BY_PAGE[
        PAGES.LEGAL_ALERTS
      ],
      ...legalAlertas
    }
    domain
      .get('call_view_tracking_use_case')
      .execute({page: PAGES.LEGAL_ALERTS})
      .then(utagData => {
        expect(utagData).to.deep.equal(expectedUtagData)
        done()
      })
  })

  it('given PAGES.LEGAL_COOKIES_POLICY it should return a valid tracking definition and call track successfully', done => {
    const PAGES = domain.get('config').get('PAGES')
    const expectedUtagData = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...domain.get('config').get('TRACKING').VIEW_TRACKING_DEFINITION_BY_PAGE[
        PAGES.LEGAL_COOKIES_POLICY
      ],
      ...legalPoliticaCookies
    }
    domain
      .get('call_view_tracking_use_case')
      .execute({page: PAGES.LEGAL_COOKIES_POLICY})
      .then(utagData => {
        expect(utagData).to.deep.equal(expectedUtagData)
        done()
      })
  })

  it('given PAGES.LEGAL_SECONDARIES_PARTNERS it should return a valid tracking definition and call track successfully', done => {
    const PAGES = domain.get('config').get('PAGES')
    const expectedUtagData = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...domain.get('config').get('TRACKING').VIEW_TRACKING_DEFINITION_BY_PAGE[
        PAGES.LEGAL_SECONDARIES_PARTNERS
      ],
      ...legalPartnersSecundarios
    }
    domain
      .get('call_view_tracking_use_case')
      .execute({page: PAGES.LEGAL_SECONDARIES_PARTNERS})
      .then(utagData => {
        expect(utagData).to.deep.equal(expectedUtagData)
        done()
      })
  })

  it('given /legal/indice it should return a valid tracking definition and call track successfully', done => {
    const PAGES = domain.get('config').get('PAGES')
    const expectedUtagData = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...domain.get('config').get('TRACKING').VIEW_TRACKING_DEFINITION_BY_PAGE[
        PAGES.LEGAL_INDEX
      ],
      ...legalIndice
    }
    domain
      .get('call_view_tracking_use_case')
      .execute({page: PAGES.LEGAL_INDEX})
      .then(utagData => {
        expect(utagData).to.deep.equal(expectedUtagData)
        done()
      })
  })

  it('given PAGES.LEGAL_USE_CONDITIONS it should return a valid tracking definition and call track successfully', done => {
    const PAGES = domain.get('config').get('PAGES')
    const expectedUtagData = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...domain.get('config').get('TRACKING').VIEW_TRACKING_DEFINITION_BY_PAGE[
        PAGES.LEGAL_USE_CONDITIONS
      ],
      ...legalCondicionesUso
    }
    domain
      .get('call_view_tracking_use_case')
      .execute({page: PAGES.LEGAL_USE_CONDITIONS})
      .then(utagData => {
        expect(utagData).to.deep.equal(expectedUtagData)
        done()
      })
  })

  it('given PAGES.LEGAL_BASIC_DATA_PROTECTION it should return a valid tracking definition and call track successfully', done => {
    const PAGES = domain.get('config').get('PAGES')
    const expectedUtagData = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...domain.get('config').get('TRACKING').VIEW_TRACKING_DEFINITION_BY_PAGE[
        PAGES.LEGAL_BASIC_DATA_PROTECTION
      ],
      ...legalInformacionBasicaProteccionDatos
    }
    domain
      .get('call_view_tracking_use_case')
      .execute({page: PAGES.LEGAL_BASIC_DATA_PROTECTION})
      .then(utagData => {
        expect(utagData).to.deep.equal(expectedUtagData)
        done()
      })
  })

  it('given PAGES.LEGAL_TRANSPARENCY it should return a valid tracking definition and call track successfully', done => {
    const PAGES = domain.get('config').get('PAGES')
    const expectedUtagData = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...domain.get('config').get('TRACKING').VIEW_TRACKING_DEFINITION_BY_PAGE[
        PAGES.LEGAL_TRANSPARENCY
      ],
      ...legalTransparencia
    }
    domain
      .get('call_view_tracking_use_case')
      .execute({page: PAGES.LEGAL_TRANSPARENCY})
      .then(utagData => {
        expect(utagData).to.deep.equal(expectedUtagData)
        done()
      })
  })

  it('given PAGES.LEGAL_AD_EMAILINGS it should return a valid tracking definition and call track successfully', done => {
    const PAGES = domain.get('config').get('PAGES')
    const expectedUtagData = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...domain.get('config').get('TRACKING').VIEW_TRACKING_DEFINITION_BY_PAGE[
        PAGES.LEGAL_AD_EMAILINGS
      ],
      ...legalEmailingsPublicitarios
    }
    domain
      .get('call_view_tracking_use_case')
      .execute({page: PAGES.LEGAL_AD_EMAILINGS})
      .then(utagData => {
        expect(utagData).to.deep.equal(expectedUtagData)
        done()
      })
  })

  it('given PAGES.CREDITS_AUTO_RENEW it should return a valid tracking definition and call track successfully', done => {
    const PAGES = domain.get('config').get('PAGES')
    const expectedUtagData = {
      ...domain.get('config').get('TRACKING').BASE_UTAG_CONFIG,
      ...domain.get('config').get('TRACKING').VIEW_TRACKING_DEFINITION_BY_PAGE[
        PAGES.CREDITS_AUTO_RENEW
      ],
      ...creditosAutoRenueva
    }
    domain
      .get('call_view_tracking_use_case')
      .execute({page: PAGES.CREDITS_AUTO_RENEW})
      .then(utagData => {
        expect(utagData).to.deep.equal(expectedUtagData)
        done()
      })
  })
})

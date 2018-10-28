import {expect} from 'chai'
import Milanuncios from '../../src'
import {
  legalPoliticaPrivacidad,
  legalAlertas,
  legalPartnersSecundarios,
  legalIndice,
  legalTransparencia,
  legalInformacionBasicaProteccionDatos,
  legalPublicidadPerfilada,
  legalCondicionesUso,
  legalPoliticaCookies,
  creditosAutoRenueva,
  legalEmailingsPublicitarios
} from '../fixtures/seo/seoDefinitionsByPage'

let domain

describe('get_seo_definition_by_page_use_case', () => {
  beforeEach(() => {
    domain = new Milanuncios()
  })

  it('given LEGAL_PRIVACY_POLICY it should return a valid seo definition', done => {
    const PAGES = domain.get('config').get('PAGES')
    domain
      .get('get_seo_definition_by_page_use_case')
      .execute({page: PAGES.LEGAL_PRIVACY_POLICY})
      .then(outputSeo => {
        expect(outputSeo).to.deep.equal(legalPoliticaPrivacidad)
        done()
      })
  })

  it('given LEGAL_AD_PROFILED it should return a valid seo definition', done => {
    const PAGES = domain.get('config').get('PAGES')
    domain
      .get('get_seo_definition_by_page_use_case')
      .execute({page: PAGES.LEGAL_AD_PROFILED})
      .then(outputSeo => {
        expect(outputSeo).to.deep.equal(legalPublicidadPerfilada)
        done()
      })
  })

  it('given LEGAL_SECONDARIES_PARTNERS it should return a valid seo definition', done => {
    const PAGES = domain.get('config').get('PAGES')
    domain
      .get('get_seo_definition_by_page_use_case')
      .execute({page: PAGES.LEGAL_SECONDARIES_PARTNERS})
      .then(outputSeo => {
        expect(outputSeo).to.deep.equal(legalPartnersSecundarios)
        done()
      })
  })

  it('given LEGAL_ALERTS it should return a valid seo definition', done => {
    const PAGES = domain.get('config').get('PAGES')
    domain
      .get('get_seo_definition_by_page_use_case')
      .execute({page: PAGES.LEGAL_ALERTS})
      .then(outputSeo => {
        expect(outputSeo).to.deep.equal(legalAlertas)
        done()
      })
  })

  it('given LEGAL_COOKIES_POLICY it should return a valid seo definition', done => {
    const PAGES = domain.get('config').get('PAGES')
    domain
      .get('get_seo_definition_by_page_use_case')
      .execute({page: PAGES.LEGAL_COOKIES_POLICY})
      .then(outputSeo => {
        expect(outputSeo).to.deep.equal(legalPoliticaCookies)
        done()
      })
  })

  it('given LEGAL_SECONDARIES_PARTNERS it should return a valid seo definition', done => {
    const PAGES = domain.get('config').get('PAGES')
    domain
      .get('get_seo_definition_by_page_use_case')
      .execute({page: PAGES.LEGAL_SECONDARIES_PARTNERS})
      .then(outputSeo => {
        expect(outputSeo).to.deep.equal(legalPartnersSecundarios)
        done()
      })
  })

  it('given LEGAL_INDEX it should return a valid seo definition', done => {
    const PAGES = domain.get('config').get('PAGES')
    domain
      .get('get_seo_definition_by_page_use_case')
      .execute({page: PAGES.LEGAL_INDEX})
      .then(outputSeo => {
        expect(outputSeo).to.deep.equal(legalIndice)
        done()
      })
  })

  it('given LEGAL_USE_CONDITIONS it should return a valid seo definition', done => {
    const PAGES = domain.get('config').get('PAGES')
    domain
      .get('get_seo_definition_by_page_use_case')
      .execute({page: PAGES.LEGAL_USE_CONDITIONS})
      .then(outputSeo => {
        expect(outputSeo).to.deep.equal(legalCondicionesUso)
        done()
      })
  })

  it('given LEGAL_BASIC_DATA_PROTECTION it should return a valid seo definition', done => {
    const PAGES = domain.get('config').get('PAGES')
    domain
      .get('get_seo_definition_by_page_use_case')
      .execute({page: PAGES.LEGAL_BASIC_DATA_PROTECTION})
      .then(outputSeo => {
        expect(outputSeo).to.deep.equal(legalInformacionBasicaProteccionDatos)
        done()
      })
  })

  it('given LEGAL_TRANSPARENCY it should return a valid seo definition', done => {
    const PAGES = domain.get('config').get('PAGES')
    domain
      .get('get_seo_definition_by_page_use_case')
      .execute({page: PAGES.LEGAL_TRANSPARENCY})
      .then(outputSeo => {
        expect(outputSeo).to.deep.equal(legalTransparencia)
        done()
      })
  })

  it('given LEGAL_AD_EMAILINGS it should return a valid seo definition', done => {
    const PAGES = domain.get('config').get('PAGES')
    domain
      .get('get_seo_definition_by_page_use_case')
      .execute({page: PAGES.LEGAL_AD_EMAILINGS})
      .then(outputSeo => {
        expect(outputSeo).to.deep.equal(legalEmailingsPublicitarios)
        done()
      })
  })

  it('given a non existing url it should throw an error', done => {
    const PAGES = domain.get('config').get('PAGES')
    domain
      .get('get_seo_definition_by_page_use_case')
      .execute({page: PAGES.NON_EXISTS})
      .catch(e => {
        expect(e.message).to.deep.equal(
          `SEO Definition undefined given the path - ${PAGES.NON_EXISTS}`
        )
        done()
      })
  })

  it('given CREDITS_AUTO_RENEW it should return a valid seo definition', done => {
    const PAGES = domain.get('config').get('PAGES')
    domain
      .get('get_seo_definition_by_page_use_case')
      .execute({page: PAGES.CREDITS_AUTO_RENEW})
      .then(outputSeo => {
        expect(outputSeo).to.deep.equal(creditosAutoRenueva)
        done()
      })
  })
})

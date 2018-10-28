import {expect} from 'chai'
import EntryPointFactory from '../../src'

describe('GetCurrentPageUseCase', () => {
  const culture = 'es-ES'
  let domain

  beforeEach(() => (domain = new EntryPointFactory()))

  it('Should return {url: null} when culture is not valid param', async () => {
    const markdownPathName = '/legal/alertas'
    const invalidCulture = 'culture'
    const markdownUrl = await domain
      .get('get_current_markdown_page_use_case')
      .execute({markdownPathName, invalidCulture})

    expect(markdownUrl).to.have.deep.property('url', null)
  })

  it('Should return the expected url end in --> legal/alertas.md', async () => {
    const markdownPathName = '/legal/alertas'
    const markdownUrl = await domain
      .get('get_current_markdown_page_use_case')
      .execute({markdownPathName, culture})

    expect(markdownUrl).to.have.deep.property(
      'url',
      'https://sui-statics-frontend.spain.schibsted.io/texts/milanuncios/es/legal/alertas.md'
    )
  })

  it('Should return the expected url end in --> legal/cookies-policy.md', async () => {
    const markdownPathName = '/legal/politica-cookies'
    const markdownUrl = await domain
      .get('get_current_markdown_page_use_case')
      .execute({markdownPathName, culture})

    expect(markdownUrl).to.have.deep.property(
      'url',
      'https://sui-statics-frontend.spain.schibsted.io/texts/milanuncios/es/legal/cookies-policy.md'
    )
  })

  it('Should return the expected url end in --> legal/emailings-publicitarios.md', async () => {
    const markdownPathName = '/legal/emailings-publicitarios'
    const markdownUrl = await domain
      .get('get_current_markdown_page_use_case')
      .execute({markdownPathName, culture})

    expect(markdownUrl).to.have.deep.property(
      'url',
      'https://sui-statics-frontend.spain.schibsted.io/texts/milanuncios/es/legal/emailings-publicitarios.md'
    )
  })

  it('Should return the expected url end in --> legal/informacion-basica-proteccion-datos.md', async () => {
    const markdownPathName = '/legal/informacion-basica-proteccion-datos'
    const markdownUrl = await domain
      .get('get_current_markdown_page_use_case')
      .execute({markdownPathName, culture})

    expect(markdownUrl).to.have.deep.property(
      'url',
      'https://sui-statics-frontend.spain.schibsted.io/texts/milanuncios/es/legal/informacion-basica-proteccion-datos.md'
    )
  })

  it('Should return the expected url end in --> legal/personalized-advertising.md', async () => {
    const markdownPathName = '/legal/publicidad-perfilada'
    const markdownUrl = await domain
      .get('get_current_markdown_page_use_case')
      .execute({markdownPathName, culture})

    expect(markdownUrl).to.have.deep.property(
      'url',
      'https://sui-statics-frontend.spain.schibsted.io/texts/milanuncios/es/legal/personalized-advertising.md'
    )
  })

  it('Should return the expected url end in --> legal/politica-privacidad.md', async () => {
    const markdownPathName = '/legal/politica-privacidad'
    const markdownUrl = await domain
      .get('get_current_markdown_page_use_case')
      .execute({markdownPathName, culture})

    expect(markdownUrl).to.have.deep.property(
      'url',
      'https://sui-statics-frontend.spain.schibsted.io/texts/milanuncios/es/legal/politica-privacidad.md'
    )
  })

  it('Should return the expected url end in --> legal/secondary-partners.md', async () => {
    const markdownPathName = '/legal/partners-secundarios'
    const markdownUrl = await domain
      .get('get_current_markdown_page_use_case')
      .execute({markdownPathName, culture})

    expect(markdownUrl).to.have.deep.property(
      'url',
      'https://sui-statics-frontend.spain.schibsted.io/texts/milanuncios/es/legal/secondary-partners.md'
    )
  })

  it('Should return the expected url end in --> legal/terms-of-use.md', async () => {
    const markdownPathName = '/legal/condiciones-uso'
    const markdownUrl = await domain
      .get('get_current_markdown_page_use_case')
      .execute({markdownPathName, culture})

    expect(markdownUrl).to.have.deep.property(
      'url',
      'https://sui-statics-frontend.spain.schibsted.io/texts/milanuncios/es/legal/terms-of-use.md'
    )
  })

  it('Should return the expected url end in --> legal/transparency.md', async () => {
    const markdownPathName = '/legal/transparencia'
    const markdownUrl = await domain
      .get('get_current_markdown_page_use_case')
      .execute({markdownPathName, culture})

    expect(markdownUrl).to.have.deep.property(
      'url',
      'https://sui-statics-frontend.spain.schibsted.io/texts/milanuncios/es/legal/transparency.md'
    )
  })

  it("Should return null when markdownPathName doesn't exist", async () => {
    const markdownPathName = '/legal/fakeFile'
    const markdownUrl = await domain
      .get('get_current_markdown_page_use_case')
      .execute({markdownPathName, culture})

    expect(markdownUrl).to.have.deep.property('url', null)
  })
})

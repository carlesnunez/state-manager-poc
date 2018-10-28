import {expect} from 'chai'
import EntryPointFactory from '../../src'
import homeCategoriesFixture from '../fixtures/categories/homeCategories'

describe('GetHomeCategoriesUseCase', () => {
  const culture = 'es-ES'
  let domain

  beforeEach(() => (domain = new EntryPointFactory()))

  it('Should result be equal to expected result', async () => {
    const homeCategories = await domain
      .get('get_home_categories_use_case')
      .execute({culture})

    expect(homeCategories).to.deep.equal(homeCategoriesFixture)
  })
})

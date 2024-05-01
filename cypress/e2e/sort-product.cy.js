describe('Sort Product from Low to High', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  beforeEach(() => {
    cy.visit('/')
    // cy.get('#homefindoutmore.more a').its('length').then((numberOfLinks) => {
    //   const randomIndex = Math.floor(Math.random() * numberOfLinks)
    //   cy.get('#homefindoutmore.more a').eq(randomIndex).click()
    // })
    cy.get('#homefindoutmore.more a').eq(1).click()
  })
  
  it('verify text sorting in select', () => {
    cy.get('#ctl00_ContentPlaceHolder1_ddlsort').select('Price Low To High')
    
    cy.url().should('include', '&sorttype=3')
    cy.get('#ctl00_ContentPlaceHolder1_ddlsort').should('have.value', '3')
    cy.get('[id$="_lblPrice"]').its('length').should('be.greaterThan', 0)
  })

  it('verify sorting data', () => {
    cy.get('#ctl00_ContentPlaceHolder1_ddlsort').select('Price Low To High')

    cy.url().should('include', '&sorttype=3')

    cy.get('[id$="_lblPrice"]').its('length').should('be.greaterThan', 0)

    cy.verifyPriceOrder('[id$="_lblPrice"]')
  })

  it('verify sorting data with view per page', () => {
    cy.get('#ctl00_ContentPlaceHolder1_ddlView').select('10')

    cy.url().should('include', '&pgsz=10')
    
    cy.get('#ctl00_ContentPlaceHolder1_ddlsort').select('Price Low To High')

    cy.url().should('include', '&sorttype=3')

    cy.verifyPriceOrder('[id$="_lblPrice"]')
  })

  it('verify sorting data with pagination', () => {
    // can be added improvement to check whether the products on the next page is continuous from previous page. e.g. 
    /*
      page 1: Rp. 150.000 (last item)
      page 2: Rp. 155.000 (first item)
     */

    cy.get('#ctl00_ContentPlaceHolder1_ddlsort').select('Price Low To High')
    cy.url().should('include', '&sorttype=3')
    
    cy.get('[id$="_lnkPaging"]').eq(1).click()
    cy.url().should('include', '&page=2')

    cy.get('[id$="_lblPrice"]').its('length').should('be.greaterThan', 0)

    cy.verifyPriceOrder('[id$="_lblPrice"]')
  })

  it('verify sorting data with filter: range price', () => {
    cy.fixture('product').then((productFixture) => {
      const dataPriceRange = productFixture.inRangePrice
      
      cy.get('#ctl00_ContentPlaceHolder1_ddlsort').select('Price Low To High')

      cy.get('.filters-title').click()
      cy.get('[id$="txtPricefrom"]').type(dataPriceRange.from)
      cy.get('[id$="txtPriceTo"]').type(dataPriceRange.to)
      cy.get('.apply-filter').click()

      cy.verifyPriceOrder('[id$="_lblPrice"]')
    })
    
  })
})
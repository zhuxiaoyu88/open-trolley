import { convertPriceStringToNumber } from "./utils/price"

Cypress.Commands.add('verifyPriceOrder', ($elements) => {
    cy.get('#ctl00_ContentPlaceHolder1_ddlsort').select('Price Low To High', {force: true}).then((a) => {
        const ele = cy.get($elements)
        
        ele.then((elem) => {
            const listTextOfPrice = Cypress._.map(elem, 'innerText')
            const convertedTextOfPrice = listTextOfPrice.map((txt) => convertPriceStringToNumber(txt))

            const sortedTextContent = listTextOfPrice.map((txt) => convertPriceStringToNumber(txt)).sort(function (a, b) {  return a - b })
            console.log(sortedTextContent)
    
            expect(convertedTextOfPrice).to.deep.equal(sortedTextContent)
        })
    })

})

Cypress.Commands.add('verifyPriceWithinRange', (dataPriceRange) => {
    const ele = cy.get('[id$="_lblPrice"]')

    ele.then((elem) => {
        const listTextOfPrice = Cypress._.map(elem, 'innerText')
        const sortedTextContent = listTextOfPrice.slice().sort()
        
        const minRange = convertPriceStringToNumber(sortedTextContent[0])
        const maxRange = convertPriceStringToNumber(sortedTextContent[sortedTextContent.length - 1])
        
        console.log(sortedTextContent)
        console.log(minRange)
        
        expect(dataPriceRange.from).to.be.at.least(minRange)
        expect(dataPriceRange.from).to.be.at.most(maxRange)
    
        expect(dataPriceRange.to).to.be.at.least(minRange)
        expect(dataPriceRange.to).to.be.at.most(maxRange)
    })
})

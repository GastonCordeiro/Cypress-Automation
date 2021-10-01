class ShoppingCartSummary
{
    getProductName()
    {
        return cy.get('tr[id^=product]').find('.product-name > a')
    }
    getProductPrice()
    {
        return cy.get('tr[id^=product]').find('.price')
    }
    getProcedToCheckoutButton()
    {
        return cy.get('.cart_navigation > .button')
    }
        

}
export default ShoppingCartSummary;
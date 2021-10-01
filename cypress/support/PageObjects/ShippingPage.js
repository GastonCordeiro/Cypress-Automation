class ShippingPage
{
    getTermsOfServiceCheckbox()
    {
        return cy.get('#cgv')
    }

    getProceedToChekoutButton()
    {
        return cy.get('.cart_navigation > button')
    }
   

}
export default ShippingPage;
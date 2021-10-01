class AuthenticationPage
{
    getAddressInput()
    {
        return cy.get('#email')
    }
    getEmailInput()
    {
        return cy.get('#passwd')
    }
    getSingInButton()
    {
        return cy.get('#SubmitLogin')
    }
        

}
export default AuthenticationPage;
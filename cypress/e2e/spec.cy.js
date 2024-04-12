describe('Login test', () => {
  it('Loged in', () => {
    cy.viewport(1980, 1080)
    cy.setCookie('b2c-anonymous-consents', '%5B%7B%22templateCode%22%3A%22Z02%22%2C%22templateVersion%22%3A1%2C%22consentState%22%3A%22GIVEN%22%7D%2C%7B%22templateCode%22%3A%22Z04%22%2C%22templateVersion%22%3A1%2C%22consentState%22%3A%22WITHDRAWN%22%7D%2C%7B%22templateCode%22%3A%22Z04A%22%2C%22templateVersion%22%3A1%2C%22consentState%22%3A%22WITHDRAWN%22%7D%2C%7B%22templateCode%22%3A%22Z04B%22%2C%22templateVersion%22%3A1%2C%22consentState%22%3A%22WITHDRAWN%22%7D%2C%7B%22templateCode%22%3A%22Z06%22%2C%22templateVersion%22%3A1%2C%22consentState%22%3A%22GIVEN%22%7D%2C%7B%22templateCode%22%3A%22Z06A%22%2C%22templateVersion%22%3A1%2C%22consentState%22%3A%22GIVEN%22%7D%2C%7B%22templateCode%22%3A%22Z06B%22%2C%22templateVersion%22%3A1%2C%22consentState%22%3A%22GIVEN%22%7D%2C%7B%22templateCode%22%3A%22Z07%22%2C%22templateVersion%22%3A1%2C%22consentState%22%3A%22GIVEN%22%7D%2C%7B%22templateCode%22%3A%22Z08%22%2C%22templateVersion%22%3A1%2C%22consentState%22%3A%22GIVEN%22%7D%5D')
    cy.visit('https://www.siko.cz/')
    cy.get('[data-testid="logIn-btn-header"]').click()
    cy.get('[data-testid="logIn-email-input"]').type('cypress@errooooooorr.cz')
    cy.get('[data-testid="logIn-email-pswd"]').type('123456')
    cy.get('[data-testid="logIn-btn"]').click()
    cy.get('.alert > .d-flex').should('be.visible')
    

  })
})
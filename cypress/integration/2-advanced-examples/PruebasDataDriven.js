/// <reference types="Cypress"/>

//Suite de casos de prueba avanzados
describe('Segundo conjunto de casos de prueba avanzadas', function(){
    before(function(){
        //Cargamos los valores del archivo example.json en un objeto de datos
        cy.fixture('example').then(function(datos){
            this.datos = datos
            cy.log(datos.name)
        })
    })
    beforeEach(()=>{
        //Ingresamos a la pagina del Formulario
        cy.visit('https://demoqa.com/automation-practice-form')
    })

    it('Llenamos nuestro primer formulario utilizando data', function(){
        
        cy.get('#firstName').type(this.datos.name)
        cy.get('#lastName').type(this.datos.lastName)
        cy.get('#userEmail').type(this.datos.email) 
        cy.get('input[name="gender"][value="Female"]').check({force: true})
    
        cy.get('#userNumber').type(this.datos.mobile) 
        cy.get('#dateOfBirthInput')
        cy.get('#subjectsContainer > div').type(this.datos.mobile) 
        
    })
})
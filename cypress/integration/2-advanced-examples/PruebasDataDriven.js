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
        cy.get('input[name="gender"][value="'+ this.datos.gender +'"]').check({force: true}).should('be.checked')
    
        cy.get('#userNumber').type(this.datos.mobile) 
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').should('be.visible').select(this.datos.dateOfBirth[0])
        
        cy.get('.react-datepicker__year-select').should('be.visible').select(this.datos.dateOfBirth[1])
        cy.get('.react-datepicker__day--0' + this.datos.dateOfBirth[2]).should('be.visible').click()
        cy.get('#dateOfBirthInput')
            .should('contain.value', this.datos.dateOfBirth[0].substring(0,3))
            .should('contain.value', this.datos.dateOfBirth[1])
            .should('contain.value', this.datos.dateOfBirth[2])
        
        cy.get('#subjectsContainer > div').type(this.datos.mobile) 
        
    })
})
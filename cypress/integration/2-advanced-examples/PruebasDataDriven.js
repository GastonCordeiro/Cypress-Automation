/// <reference types="Cypress"/>

//Suite de casos de prueba avanzados
describe('Segundo conjunto de casos de prueba avanzadas', function(){
    before(function(){
        //Cargamos los valores del archivo example.json en un objeto de datos
        cy.fixture('example').then(function(datos){
            this.datos = datos
        cy.fixture(this.datos.picture).as('picture')
        })
        
    })
    beforeEach(()=>{
        //Ingresamos a la pagina del Formulario
        cy.visit('https://demoqa.com/automation-practice-form')
    })
    //Caso 7
    it('Llenamos nuestro primer formulario utilizando data', function(){
        //Completo campo Name, Last name, email, gender y mobile
        cy.get('#firstName').type(this.datos.name)
        cy.get('#lastName').type(this.datos.lastName)
        cy.get('#userEmail').type(this.datos.email) 
        cy.get('input[name="gender"][value="'+ this.datos.gender +'"]').check({force: true}).should('be.checked')
        cy.get('#userNumber').type(this.datos.mobile) 
        //Completo campos de date of birth
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').should('be.visible').select(this.datos.dateOfBirth[0])
        cy.get('.react-datepicker__year-select').should('be.visible').select(this.datos.dateOfBirth[1])
        cy.get('.react-datepicker__day--0' + this.datos.dateOfBirth[2]).should('be.visible').click()
        cy.get('#dateOfBirthInput')
            .should('contain.value', this.datos.dateOfBirth[0].substring(0,3))
            .should('contain.value', this.datos.dateOfBirth[1])
            .should('contain.value', this.datos.dateOfBirth[2])
        
        //Completo campo Subject    
        cy.get('.subjects-auto-complete__value-container').type(this.datos.subjects)
        cy.get('div[id^="react-select-"]').click()
        cy.get('.subjects-auto-complete__value-container').should('contain.text', this.datos.subjects)

        //Completo campo Hobbies
        //cy.get('div[class^="custom-control custom-checkbox"]:has(label:contains('"+this.datos.hobbies[0]+"')) input').check({force: true}).should('be.checked')
        cy.get('div[class^="custom-control custom-checkbox"]:has(label:contains("'+this.datos.hobbies[0]+'")) input').check({force: true}).should('be.checked')

        //subir imagen a un formulario
        cy.get('#uploadPicture').then(function($el){
            //convertir la imagen en un string de base64
            const blob = Cypress.Blob.base64StringToBlob(this.picture, 'image/png')

            const file = new File([blob], this.datos.picture, {type: 'image/png'})
            const list = new DataTransfer()

            list.items.add(file)
            const myFileList = list.files
            
            $el[0].files = myFileList
            $el[0].dispatchEvent(new Event('change', { bubbles: true}))

        
        })

        // Agrego direccion, State y City
        cy.get('#currentAddress').type(this.datos.currentAddress)
        cy.get('#state').click().find("div:contains("+ this.datos.state +")[id*='react-select']").should('be.visible').click()
        cy.get('#city').click().find("div:contains("+ this.datos.city +")[id*='react-select']").should('be.visible').click()
        cy.get('#submit').click()

        //Verifico el envio de formulario exitoso y sus datos
        cy.get('#example-modal-sizes-title-lg').should('have.text', "Thanks for submitting the form" )
        cy.get('td:contains(Student Name) +td')
            .should('have.text', this.datos.name + " " + this.datos.lastName)
        
        cy.get('td:contains(Student Email) +td')
            .should('have.text', this.datos.email )

        cy.get('td:contains(Gender) +td')
            .should('have.text', this.datos.gender )

        cy.get('td:contains(Mobile) +td')
            .should('have.text', this.datos.mobile )    

        cy.get('td:contains(Date of Birth) +td')
            .should('have.text', this.datos.dateOfBirth[2] + " "
            + this.datos.dateOfBirth[0] + ","
            + this.datos.dateOfBirth[1]) 

        cy.get('td:contains(Subjects) +td')
            .should('have.text', this.datos.subjects) 

        cy.get('td:contains(Hobbies) +td')
            .should('have.text', this.datos.hobbies[0]) 

        cy.get('td:contains(Picture) +td')
            .should('have.text', this.datos.picture)

        cy.get('td:contains(Address) +td')
            .should('have.text', this.datos.currentAddress)
            
        cy.get('td:contains(State) +td')
            .should('have.text', this.datos.state + " " + this.datos.city)
    })
})
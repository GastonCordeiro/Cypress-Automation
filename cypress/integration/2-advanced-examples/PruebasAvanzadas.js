/// <reference types="Cypress"/>

//Suite de casos de prueba avanzados
describe('Tercer feature de casos avanzados', function(){
    beforeEach(()=>{
        //Ingresamos a la pagina de compras de articulos tecnologicos
        cy.visit('https://demo.opencart.com/')
    })
    before(function(){
        //Cargamos los valores del archivo example.json en un objeto de datos
        cy.fixture('carritoDeCompras').then(function(datos){
            this.datos = datos
        }) 
    })
    //Caso 8

    it("Realizar compra de celulares basadas en su nombre", function(){
        //cy.get('ul[class="nav navbar-nav"]:has(a:contains("Phones & PDAs"))').click()
        cy.get('#menu ul a:contains("Phones & PDAs")').click()
        cy.agregarElementoAlCarrito(this.datos.phone1)
        cy.agregarElementoAlCarrito(this.datos.phone2)
        cy.agregarElementoAlCarrito(this.datos.phone3)
       
        cy.get('.btn-inverse').click()

        cy.verificamosElementosCarritoDD(this.datos.phone1)
        cy.verificamosElementosCarritoDD(this.datos.phone2)
        cy.verificamosElementosCarritoDD(this.datos.phone3)
    }) 

})
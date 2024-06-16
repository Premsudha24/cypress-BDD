///<reference types ="cypress"/>
import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
Given('going to url here',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})
When('adding email and password',(datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get('[name="username"]').type(element.username)
        cy.get('[name="password"]').type(element.password)
});
})
And('clicking on submit',()=>{
    cy.get('.orangehrm-login-button').click()
})
Then('verifying the details',()=>{
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
})

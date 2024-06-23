import { use } from "chai"

export default class Registeruser {
    selector ={
        url : 'https://ecommerce-playground.lambdatest.io/index.php?route=account/login',
        registeruserbutton : '.btn.btn-primary', //eq=1
        firstname : '[id="input-firstname"]',
        lastname : '[id="input-lastname"]',
        email : '[id="input-email"]',
        telephone: '[id="input-telephone"]',
        password: '[id="input-password"]',
        passwordc: '[id="input-confirm"]',
        checkbox: '[id="input-agree"]',
        continuebtn: '[class="btn btn-primary"]',
        valid: '[class="page-title my-3"]',
        accountbtn: '[class="icon fas fa-user"]',
        logoutbtn: '[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/logout"]',
        logoutcontinuebtn: '[class="btn btn-primary"]',
        loginbtn: '[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]',
        relogin:'[id="input-email"]',
        repassword: '#input-password',
        resubmit: '[value="Login"]'
    }
    visiturl(){
        cy.visit(this.selector.url)
    }
    continuebutton(css){
        cy.get(css).eq(1).click()
    }
    register(userdata){
        cy.get(this.selector.firstname).type(userdata.fn)
        cy.get(this.selector.lastname).type(userdata.ln)
        cy.get(this.selector.email).type(userdata.email)
        cy.get(this.selector.telephone).type(userdata.tele)
        cy.get(this.selector.password).type(userdata.pwd)
        cy.get(this.selector.passwordc).type(userdata.pwd)
        cy.get(this.selector.checkbox).click({force:true})
        cy.get(this.selector.continuebtn).click()
    }
    validation(){
        cy.get(this.selector.valid).should('contain.text',' Your Account Has Been Created!')
    }
logginout(){
    cy.get(this.selector.accountbtn).click()
    cy.get(this.selector.logoutbtn).eq(0).click({force:true})
    cy.get(this.selector.logoutcontinuebtn).click()
}
logginin(userdata){
    cy.get(this.selector.accountbtn).click()
    cy.get(this.selector.loginbtn).eq(0).click({force:true})
    cy.get(this.selector.relogin).type(userdata.email)
    cy.get(this.selector.repassword).type(userdata.pwd)
    cy.get(this.selector.resubmit).click()
}
}
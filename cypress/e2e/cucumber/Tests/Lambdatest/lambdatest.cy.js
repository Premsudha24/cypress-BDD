import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import page from "../../Pages/Lambdatest"
import data from "../../../../fixtures/Lambdatest"
let pg = new page
let currentuser;
Given('Opening Lambda LambdaSite{word}',(index) => {
    currentuser = data[index]
    pg.visiturl()
})
When('clicking on Continue button', () => {
    pg.continuebutton(pg.selector.registeruserbutton)

})
And('Filling registration details', () => {
    pg.register(currentuser)
})
When('Checking validation if user created', () => {
    pg.validation()
})
And('clicking on logout and Continue',()=>{
pg.logginout()
})
Then('login again',()=>{
pg.logginin(currentuser)
})
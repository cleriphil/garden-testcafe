import { Selector } from 'testcafe';

class PracticeSitePage {
    constructor () {
        this.formsNav = Selector('#forms');
        this.RegisterNav = Selector('#register'); 
         
        this.firstNameField = Selector('#registerForm').child('#firstName');     
        this.lastNameField = Selector('#registerForm').child('#lastName');     
        this.phoneField = Selector('#registerForm').child('#phone');     
        this.countryField = Selector('#registerForm').child('#countries_dropdown_menu');     
        this.emailField = Selector('#registerForm').child('#emailAddress');     
        this.passwordField = Selector('#registerForm').child('#password');     
    }
}

export default new PracticeSitePage();
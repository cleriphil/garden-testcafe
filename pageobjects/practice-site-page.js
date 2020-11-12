import { Selector } from 'testcafe';

class PracticeSitePage {
    constructor () {
        this.formsNav = Selector('#forms');
        this.RegisterNav = Selector('#register'); 
         
        this.firstNameField = Selector('#registerForm').find('#firstName');     
        this.lastNameField = Selector('#registerForm').find('#lastName');     
        this.phoneField = Selector('#registerForm').find('#phone');     
        this.countryField = Selector('#registerForm').find('#countries_dropdown_menu');     
        this.emailField = Selector('#registerForm').find('#emailAddress');     
        this.passwordField = Selector('#registerForm').find('#password');     

        this.registerBtn = Selector('#registerBtn');
        this.successMsg = Selector('#message').withText('The account has been successfully created!');
    }
}

export default new PracticeSitePage();
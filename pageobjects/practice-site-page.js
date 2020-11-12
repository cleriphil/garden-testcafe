import { Selector } from 'testcafe';

class PracticeSitePage {
    constructor () {
        this.formsNav = Selector('#forms');
        this.registerNav = Selector('#register'); 
        this.loginNav = Selector('#login'); 
         
        this.firstNameField = Selector('#registerForm').find('#firstName');     
        this.lastNameField = Selector('#registerForm').find('#lastName');     
        this.phoneField = Selector('#registerForm').find('#phone');     
        this.countryField = Selector('#registerForm').find('#countries_dropdown_menu');     
        this.emailField = Selector('#registerForm').find('#emailAddress');     
        this.passwordField = Selector('#registerForm').find('#password');     

        this.registerBtn = Selector('#registerBtn');
        this.message = {
            registerSuccess: Selector('#message').withText('The account has been successfully created!'),
            loginSuccess:  Selector('#message').withText('You have successfully logged in!'),
            loginError: Selector('#message').withText('Bad credentials! Please try again!')
        } 
        
        this.loginEmailField = Selector('#login').find('#email');
        this.loginPasswordField = Selector('#login').find('#password');
       
        this.loginSubmitBtn = Selector('#submitLoginBtn');
        
    }
}

export default new PracticeSitePage();
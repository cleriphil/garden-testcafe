import { Selector } from 'testcafe';

class PracticeSitePage {
    constructor () {
        this.nav = {
            forms: Selector('#forms'),
            register: Selector('#register'), 
            login: Selector('#login')
        }
        
        this.registerTxtFields = {
            firstNameField: Selector('#registerForm').find('#firstName'),     
            lastNameField: Selector('#registerForm').find('#lastName'),    
            phoneField: Selector('#registerForm').find('#phone'),
            passwordField: Selector('#registerForm').find('#password')                 
        }

        this.registerEmailField = Selector('#registerForm').find('#emailAddress');
        this.registerSubmitBtn = Selector('#registerBtn');

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
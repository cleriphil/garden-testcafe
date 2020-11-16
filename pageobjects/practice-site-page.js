import { Selector, t } from 'testcafe';

class PracticeSitePage {
    constructor () {
        this.nav = {
            forms: Selector('#forms'),
            register: Selector('#register'), 
            login: Selector('#login')
        }
        
        this.registerTxtFields = {
            firstName: Selector('#registerForm').find('#firstName'),     
            lastName: Selector('#registerForm').find('#lastName'),    
            phone: Selector('#registerForm').find('#phone'),
            password: Selector('#registerForm').find('#password')                 
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

    async fillTxtFields() {
        const registerFields = Object.values(this.registerTxtFields);
        for (const value of registerFields) {
            await t
                .typeText(value, 'test');
        }
    }
}

export default new PracticeSitePage();
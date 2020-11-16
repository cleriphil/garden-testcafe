import { Selector, t } from 'testcafe';

class PracticeSitePage {
    constructor () {
        this.nav = {
            forms: Selector('#forms'),
            register: Selector('#register'), 
            login: Selector('#login'),
            recoverPassword: Selector('#recover-password')
        }
        
        this.message = {
            registerSuccess: Selector('#message').withText('The account has been successfully created!'),
            loginSuccess:  Selector('#message').withText('You have successfully logged in!'),
            loginError: Selector('#message').withText('Bad credentials! Please try again!'),
            recoverSuccess: Selector('#message').withText('An email with the new password has been sent to')
        } 

        this.registerTxtFields = {
            firstName: Selector('#registerForm').find('#firstName'),     
            lastName: Selector('#registerForm').find('#lastName'),    
            phone: Selector('#registerForm').find('#phone'),
            password: Selector('#registerForm').find('#password')                 
        }
        
        this.registerEmailField = Selector('#registerForm').find('#emailAddress');
        this.registerSubmitBtn = Selector('#registerBtn');
        
        this.loginEmailField = Selector('#login').find('#email');
        this.loginPasswordField = Selector('#login').find('#password');
        this.loginSubmitBtn = Selector('#submitLoginBtn');
        
        this.recoverEmailField = Selector('#recover-pw-form').find('#email');
        this.recoverSubmitBtn = Selector('#recover-pw-form').find('#recover-password');
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
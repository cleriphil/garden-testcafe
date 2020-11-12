import { Selector } from 'testcafe';
import PracticeSitePage from '../pageobjects/practice-site-page.js';


fixture `Smoke Tests`
    .page `https://qa-automation-practice.netlify.app/`;

test('Create a new user', async t => {   
    await t
        .click(PracticeSitePage.formsNav)
        .click(PracticeSitePage.registerNav)
        .typeText(PracticeSitePage.firstNameField, 'test')
        .typeText(PracticeSitePage.lastNameField, 'test')
        .typeText(PracticeSitePage.phoneField, 'test')
        //add countryField
        .typeText(PracticeSitePage.emailField, 'test@example.com')
        .typeText(PracticeSitePage.passwordField, 'test')
        .click(PracticeSitePage.registerBtn)
        .expect(PracticeSitePage.message.registerSuccess.exists).ok();
});

test('Login', async t => {   
    await t
        .click(PracticeSitePage.formsNav)
        .click(PracticeSitePage.loginNav)
        .typeText(PracticeSitePage.loginEmailField, 'admin@admin.com')
        .typeText(PracticeSitePage.loginPasswordField, 'admin123')
        .click(PracticeSitePage.loginSubmitBtn)
        .expect(PracticeSitePage.message.loginSuccess.exists).ok();
});

test('Login validation', async t => {   
    await t
        .click(PracticeSitePage.formsNav)
        .click(PracticeSitePage.loginNav)
        .typeText(PracticeSitePage.loginEmailField, 'admin@admin.com')
        .typeText(PracticeSitePage.loginPasswordField, 'lorem ipsum')
        .click(PracticeSitePage.loginSubmitBtn)
        .expect(PracticeSitePage.message.loginSuccess.exists).notOk()
        .expect(PracticeSitePage.message.loginError.exists).ok();
});
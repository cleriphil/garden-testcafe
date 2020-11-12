import { Selector } from 'testcafe';
import PracticeSitePage from '../pageobjects/practice-site-page.js';


fixture `Smoke Tests`
    .page `https://qa-automation-practice.netlify.app/`;

test('Create a new user', async t => {   
    await t
        .click(PracticeSitePage.formsNav)
        .click(PracticeSitePage.RegisterNav)
        .typeText(PracticeSitePage.firstNameField, 'test')
        .typeText(PracticeSitePage.lastNameField, 'test')
        .typeText(PracticeSitePage.phoneField, 'test')
        //add countryField
        .typeText(PracticeSitePage.emailField, 'test@example.com')
        .typeText(PracticeSitePage.passwordField, 'test')
        .click(PracticeSitePage.registerBtn)
        .expect(PracticeSitePage.successMsg.exists).ok();
});
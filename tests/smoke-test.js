import { Selector } from 'testcafe';
import PracticeSitePage from '../pageobjects/practice-site-page.js';


fixture `Smoke Tests`
    .page `https://qa-automation-practice.netlify.app/`;

test('Create a new user', async t => {  
    const registerFieldValues = Object.values(PracticeSitePage.registerTxtFields);
    await t
        .click(PracticeSitePage.nav.forms)
        .click(PracticeSitePage.nav.register);
    for (const value of registerFieldValues) {
        await t
            .typeText(value, 'test');
    }
    await t
        .typeText(PracticeSitePage.registerEmailField, 'test@example.com')
        .click(PracticeSitePage.registerSubmitBtn)
        .expect(PracticeSitePage.message.registerSuccess.exists).ok();
});

test('Login', async t => {   
    await t
        .click(PracticeSitePage.nav.forms)
        .click(PracticeSitePage.nav.login)
        .typeText(PracticeSitePage.loginEmailField, 'admin@admin.com')
        .typeText(PracticeSitePage.loginPasswordField, 'admin123')
        .click(PracticeSitePage.loginSubmitBtn)
        .expect(PracticeSitePage.message.loginSuccess.exists).ok();
});

test('Login validation', async t => {   
    await t
        .click(PracticeSitePage.nav.forms)
        .click(PracticeSitePage.nav.login)
        .typeText(PracticeSitePage.loginEmailField, 'admin@admin.com')
        .typeText(PracticeSitePage.loginPasswordField, 'lorem ipsum')
        .click(PracticeSitePage.loginSubmitBtn)
        .expect(PracticeSitePage.message.loginSuccess.exists).notOk()
        .expect(PracticeSitePage.message.loginError.exists).ok();
});
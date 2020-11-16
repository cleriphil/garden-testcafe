import { Selector } from 'testcafe';
import PracticeSitePage from '../pageobjects/practice-site-page.js';


fixture `Smoke Tests`
    .page `https://qa-automation-practice.netlify.app/`
    .beforeEach( async t => {
        await t
            .click(PracticeSitePage.nav.forms)
    });

test('Create a new user', async t => {  
    await t.click(PracticeSitePage.nav.register);
    await PracticeSitePage.fillTxtFields();
    await t
        .typeText(PracticeSitePage.registerEmailField, 'test@example.com')
        .click(PracticeSitePage.registerSubmitBtn)
        .expect(PracticeSitePage.message.registerSuccess.exists).ok();
});

test('Can\'t submit form with no email', async t => {   
    await t.click(PracticeSitePage.nav.register);
    await PracticeSitePage.fillTxtFields();
    await t
        .click(PracticeSitePage.registerSubmitBtn)
        .expect(PracticeSitePage.message.registerSuccess.exists).notOk()
        .expect(PracticeSitePage.registerEmailField.focused).eql(true);
});

test('Can\'t submit form with no password', async t => {   
    await t
        .click(PracticeSitePage.nav.register)
        .typeText(PracticeSitePage.registerEmailField, 'test@example.com')
        .click(PracticeSitePage.registerSubmitBtn)
        .expect(PracticeSitePage.message.registerSuccess.exists).notOk()
        .expect(PracticeSitePage.registerTxtFields.password.focused).eql(true);
});

test('Can\'t submit register form with no values', async t => {   
    await t
        .click(PracticeSitePage.nav.register)
        .click(PracticeSitePage.registerSubmitBtn)
        .expect(PracticeSitePage.message.registerSuccess.exists).notOk()
        .expect(PracticeSitePage.registerEmailField.focused).eql(true);
});

test('Login with correct credentials', async t => {   
    await t
        .click(PracticeSitePage.nav.login)
        .typeText(PracticeSitePage.loginEmailField, 'admin@admin.com')
        .typeText(PracticeSitePage.loginPasswordField, 'admin123')
        .click(PracticeSitePage.loginSubmitBtn)
        .expect(PracticeSitePage.message.loginSuccess.exists).ok();
});

test('Can\'t submit form with wrong credentials', async t => {   
    await t
        .click(PracticeSitePage.nav.login)
        .typeText(PracticeSitePage.loginEmailField, 'admin@admin.com')
        .typeText(PracticeSitePage.loginPasswordField, 'lorem ipsum')
        .click(PracticeSitePage.loginSubmitBtn)
        .expect(PracticeSitePage.message.loginSuccess.exists).notOk()
        .expect(PracticeSitePage.message.loginError.exists).ok();
});

test('Can\'t submit login form with no values', async t => {   
    await t
        .click(PracticeSitePage.nav.login)
        .click(PracticeSitePage.loginSubmitBtn)
        .expect(PracticeSitePage.message.loginSuccess.exists).notOk()
        .expect(PracticeSitePage.message.loginError.exists).ok();
});

test('Recover password with valid email', async t => {
    await t
        .click(PracticeSitePage.nav.recoverPassword)
        .typeText(PracticeSitePage.recoverEmailField, 'test@example.com')
        .click(PracticeSitePage.recoverSubmitBtn)
        .expect(PracticeSitePage.message.recoverSuccess.exists).ok();
});

test('Can\'t submit recover form with invalid email', async t => {
    await t
        .click(PracticeSitePage.nav.recoverPassword)
        .typeText(PracticeSitePage.recoverEmailField, 'test')
        .click(PracticeSitePage.recoverSubmitBtn)
        .expect(PracticeSitePage.recoverEmailField.focused).eql(true);
});
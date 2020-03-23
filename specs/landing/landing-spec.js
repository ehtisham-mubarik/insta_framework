const assert = require('assert')
const LoginPage = require('../../page_objects/login/login-page');
const LandingPage = require('../../page_objects/landing/landing-page');
const CommonPage = require('../../page_objects/common/common-page');
const ProfilePage = require('../../page_objects/profile/profile-page');
const loginUrl = 'https://www.instagram.com/accounts/login/?source=auth_switcher';

describe('Login', () => {
    before(() => {
        // Instantiate new Object
        this.loginPage = new LoginPage();
        this.landingPage = new LandingPage();
        this.commonPage = new CommonPage();
        this.profilePage = new ProfilePage();
    });

    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });

    it.only('should verify suggested profiles', () => {
        browser.url(loginUrl)

        // Type in username, password and click login
        this.loginPage.login('sergio_riverra', 'Password1!');

        // Click on profile icon
        this.commonPage.disableWelcomePopup();
        this.landingPage.verifySuggestedProfilesSection();
    });
});
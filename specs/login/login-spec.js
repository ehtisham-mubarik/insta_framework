const assert = require('assert')
const LoginPage = require('../../page_objects/login/login-page');
const CommonPage = require('../../page_objects/common/common-page');
const ProfilePage = require('../../page_objects/profile/profile-page');
const loginUrl = 'https://www.instagram.com/accounts/login/?source=auth_switcher';
const timeout = 20000;

describe('Login', () => {
    // This hook runs only once before all tests
    before(() => {
        // Instantiate new Object
        this.loginPage = new LoginPage();
        this.commonPage = new CommonPage();
        this.profilePage = new ProfilePage();
    });

    // This hook runs aftert each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });

    it('should be able to login', () => {
        browser.url(loginUrl)

        // Type in username, password and click login
        this.loginPage.UsernameTxt.setValue('sergio_riverra');
        this.loginPage.PasswordTxt.setValue('Password1!');
        this.loginPage.LoginLnk.click();

        // Wait for nasty modal to show up and click Not now button
        this.commonPage.disableWelcomePopup();

        // Verify use was logged in by waiting fof profile icon and suggested for you label
        this.commonPage.ProfileIconLnk.waitForDisplayed(timeout, false, 'Profile icon was not displayed');
        this.commonPage.SuggestedForYouLbl.waitForDisplayed(timeout, false, 'Suggested for your label was not displayed');
    });

    it('should be able to logout', () => {
        browser.url(loginUrl)

        // Type in username, password and click login
        this.loginPage.login('sergio_riverra', 'Password1!');

        // Click on profile icon
        this.commonPage.ProfileIconLnk.click();

        // Click on settings gear icon
        this.profilePage.SettingsIconLnk.waitForDisplayed(timeout, false, 'Settings gear icon was not displayed');
        this.profilePage.SettingsIconLnk.click();

        // Click on logout icon
        this.profilePage.LogoutLnk.waitForDisplayed(timeout, false, 'Logout icon was not displayed');
        this.profilePage.LogoutLnk.click();
    });

    it('should be able to logout', () => {
        browser.url(loginUrl)

        // Type in username, password and click login
        this.loginPage.login('sergio_riverra', 'Password1!');

        // Click on profile icon
        this.commonPage.ProfileIconLnk.click();

        browser.debug();
    });
});
"use strict";

class Landing {
	// Suggested section
    get profileIconsLnk() {return $$('[height="108"]');}
    
    verifySuggestedProfilesSection(){
        // Wait for all profile icons are clickable
        browser.waitUntil(() => this.profileIconsLnk.map(elem => elem.waitForClickable(undefined, false, `${elem} profile icon was not clickable`)));
    }
}

module.exports = Landing;
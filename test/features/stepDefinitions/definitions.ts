//import { Given, When, Then } from 'cucumber';
import { defineSupportCode } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import googlePage from '../pageobjects/google-search.page';

defineSupportCode(function({ Given }) {

  // *** belongs to Yahoo search feature
  Given(/^I am on the Yahoo search page$/, function() {
    yahooPage.open();
    browser.getTitle().should.equal('Yahoo Search - Web Search');
  });

  // *** belongs to Google search feature
  Given(/^I am on the Google search page$/, function() {
    googlePage.open();
    browser.getTitle().should.equal('Google');
  });  

});

defineSupportCode(function({ Then }) {
  // *** belongs to Yahoo serch feature
  Then(/^I should see a list of search results$/, function() {
    yahooPage.isSearched().should.be.true;
  });

});


defineSupportCode(function({ When }) {
  // *** belongs to Yahoo serch feature
  When(/^I enter "([^"]*)" into the search box$/, function(arg1) {
    yahooPage.enterText(arg1);
    yahooPage.searchInput.getValue().should.equal(arg1);
  });

  When(/^I click the search button$/, function() {
    yahooPage.search();
  });
});

//import { Given, When, Then } from 'cucumber';
import { defineSupportCode } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';

defineSupportCode(function({ Given }) {

  // *** belongs to Yahoo serch feature
  Given(/^I am on the search page$/, function() {
    yahooPage.open();
    browser.getTitle().should.equal('Yahoo Search - Web Search');
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

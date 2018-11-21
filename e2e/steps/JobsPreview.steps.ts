import { defineSupportCode, TableDefinition } from 'cucumber';
import { JobsPreviewPage } from '../pages/JobsPreview.page';
import { browser } from 'protractor';
declare const expect: any;

defineSupportCode (({Given, When, Then}) => {
  const page = new JobsPreviewPage();

  Given(/^I navigate to jobs page$/, async () => {
    await page.navigateTo();
  });

  Then(/^I can see jobs loaded in the left panel$/, () => {
    return 'pending';
  });

  Then(/^I can see main title$/, async () => {
    expect(await page.getMainHeaderText()).to.be.equal('Active jobs');
  });

  Then(/^I can see tooltip in the right panel$/, () => {
    return 'pending';
  });

  When(/^I choose second job in the first panel$/, () => {
    return 'pending';
  });

  Then(/^I see job details in the second panel$/, () => {
    return 'pending';
  });

});

import { defineSupportCode, TableDefinition } from 'cucumber';
import { JobsPreviewPage } from '../pages/JobsPreview.page';
declare const expect: any;

defineSupportCode (({Given, When, Then}) => {
  const page = new JobsPreviewPage();

  Given(/^I navigate to jobs page$/, async () => {
    await page.navigateTo();
  });

  Then(/^I can see jobs loaded in the left panel$/, async () => {
    expect((await page.getJobCardsAmount()).length).to.be.equal(3);
  });

  Then(/^I can see main title$/, async () => {
    expect(await page.getMainHeaderText()).to.be.equal('Active jobs');
  });

  Then(/^I can see first job loaded in the right panel$/, async () => {
    expect((await page.getJobTitle()).slice(0, 2)).to.be.equal('90');
  });

  When(/^I choose second job in the first panel$/, () => {
    page.clickSecondCard();
  });

  Then(/^I see second job details in the second panel$/, async () => {
    expect((await page.getJobTitle()).slice(0, 3)).to.be.equal('2 S');
  });

});

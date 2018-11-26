import { browser, by, element } from 'protractor';

export class JobsPreviewPage {

  public navigateTo() {
    return browser.get('/');
  }

  public getMainHeaderText() {
    return element(by.css('app-jobs .jobs-header .title')).getText();
  }

  public getJobCardsAmount() {
    browser.driver.sleep(2000);
    this.wait('.job-card', 10000);
    return element.all(by.css('app-job-list .job-card')).getWebElements();
  }

  public getJobTitle() {
    return element(by.css('.job-info-block-value')).getText();
  }

  public clickSecondCard() {
    element.all(by.css('app-job-list .job-card')).getWebElements().then(cards => {
      cards[1].findElement(by.css('.job-card-content-title')).click();
    });
  }

  private wait(selector, timeout) {
    browser.driver.wait(function() {
      return browser.isElementPresent(by.css(selector)).then(function(present) {
        return present;
      });
    }, timeout);
    browser.driver.wait(function() {
      return browser.findElement(by.css(selector)).isDisplayed().then(function(displayed) {
        return displayed;
      });
    }, timeout).then(function() {
      return;
    });
  }
}

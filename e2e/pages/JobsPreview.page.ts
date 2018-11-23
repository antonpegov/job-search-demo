import { browser, by, element } from 'protractor';

export class JobsPreviewPage {
  navigateTo() {
    return browser.get('/');
  }

  getMainHeaderText() {
    return element(by.css('app-jobs .header .title')).getText();
  }
}

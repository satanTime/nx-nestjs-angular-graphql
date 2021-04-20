import {User} from '@da-control-tower/ct-models/User';
import {browser, by, element} from 'protractor';

export class AppPage {
  async navigateTo(spec = ''): Promise<unknown> {
    return browser.get(browser.baseUrl + '?e2e-spec=' + spec);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('da-control-tower-root h1')).getText();
  }

  async getUser$(): Promise<User> {
    const text = await element(by.css('[data-role="entity-user$"]')).getText();
    return JSON.parse(text);
  }
}

import {browser, logging} from 'protractor';

import {AppPage} from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Welcome to CT Backend! For E2E!');
  });

  it('should load user #1', async () => {
    await page.navigateTo('user-1');
    expect(await page.getUser$()).toEqual({
      companyId: '1',
      id: '1',
      firstName: 'E2E',
      lastName: 'Test',
      company: {
        addressId: '1',
        id: '1',
        name: 'E2E Test',
        staff: [
          {
            companyId: '1',
            id: '1',
            firstName: 'E2E',
            lastName: 'Test',
          },
        ],
        address: {
          id: '1',
          street: 'E',
          city: '2',
          country: 'E',
        },
      },
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry),
    );
  });
});

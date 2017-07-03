import { Angular2BusinessListingPage } from './app.po';

describe('angular2-business-listing App', () => {
  let page: Angular2BusinessListingPage;

  beforeEach(() => {
    page = new Angular2BusinessListingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

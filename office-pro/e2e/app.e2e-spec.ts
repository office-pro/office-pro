import { OfficeProPage } from './app.po';

describe('office-pro App', function() {
  let page: OfficeProPage;

  beforeEach(() => {
    page = new OfficeProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

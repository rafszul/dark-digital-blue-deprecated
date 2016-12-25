import { DarkDigitalBlueDeprecatedPage } from './app.po';

describe('dark-digital-blue-deprecated App', function() {
  let page: DarkDigitalBlueDeprecatedPage;

  beforeEach(() => {
    page = new DarkDigitalBlueDeprecatedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

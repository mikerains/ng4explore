import { BformsPage } from './app.po';

describe('bforms App', () => {
  let page: BformsPage;

  beforeEach(() => {
    page = new BformsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

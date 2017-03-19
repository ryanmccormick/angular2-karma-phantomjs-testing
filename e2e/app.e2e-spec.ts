import { NgKarmaPhantomAppPage } from './app.po';

describe('ng-karma-phantom-app App', () => {
  let page: NgKarmaPhantomAppPage;

  beforeEach(() => {
    page = new NgKarmaPhantomAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

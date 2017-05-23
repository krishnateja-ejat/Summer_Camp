import { SummerCampPage } from './app.po';

describe('summer-camp App', () => {
  let page: SummerCampPage;

  beforeEach(() => {
    page = new SummerCampPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { IniTechClientPage } from './app.po';

describe('ini-tech-client App', () => {
  let page: IniTechClientPage;

  beforeEach(() => {
    page = new IniTechClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

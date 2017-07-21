import { Heros1Page } from './app.po';

describe('heros1 App', () => {
  let page: Heros1Page;

  beforeEach(() => {
    page = new Heros1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

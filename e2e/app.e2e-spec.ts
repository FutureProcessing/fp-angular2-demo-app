import { FpDemoAppPage } from './app.po';

describe('fp-demo-app App', function() {
  let page: FpDemoAppPage;

  beforeEach(() => {
    page = new FpDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

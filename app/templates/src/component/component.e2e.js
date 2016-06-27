describe('test component', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('has a title', () => {
    expect(browser.getTitle()).toEqual('<%= appname %>');
  });

  it('shows a header with test text', () => {
    expect(element(by.css('<%= appname %> h1')).getText()).toEqual('<%= appname %>');
  });
});

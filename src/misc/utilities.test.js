import { css } from './utilities';

describe('css', () => {
  it('should concat classes', () => {
    expect(css('btn', 'app-bar')).toEqual('btn app-bar');
  });

  it('should ignore non strings', () => {
    expect(
      css(
        'btn',
        'app-bar',
        null,
        undefined,
        new Date(),
        9,
        {},
        [],
        'test'
      )
    ).toEqual('btn app-bar test');
  });

  it('should ignore empty strings', () => {
    expect(css('btn', 'app-bar', '', 'bottom-nav', '      ')).toEqual(
      'btn app-bar bottom-nav'
    );
  });
});

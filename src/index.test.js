import { init, getConfig } from './index';

test('init', () => {
  init({ key: 'KEY' });
  const config = getConfig();
  
  expect(config.key).toBe('KEY');
});
'use strict';

describe('PostsStore', () => {
  let store;

  beforeEach(() => {
    store = require('stores/PostsStore.js');
  });

  it('should be defined', () => {
    expect(store).toBeDefined();
  });
});

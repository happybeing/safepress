'use strict';

describe('SafepressCoreApp', () => {
  let React = require('react/addons');
  let SafepressCoreApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SafepressCoreApp = require('components/SafepressCoreApp.js');
    component = React.createElement(SafepressCoreApp);
  });

  it('should create a new instance of SafepressCoreApp', () => {
    expect(component).toBeDefined();
  });
});

'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import EditorList from 'components/EditorList.js';

describe('EditorList', () => {
    let EditorListComponent;

    beforeEach(() => {
        EditorListComponent = createComponent(EditorList);
    });

    it('should have its component name as default className', () => {
        expect(EditorListComponent._store.props.className).toBe('EditorList');
    });
});

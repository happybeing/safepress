'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Editor from 'components/Editor.js';

describe('Editor', () => {
    let EditorComponent;

    beforeEach(() => {
        EditorComponent = createComponent(Editor);
    });

    it('should have its component name as default className', () => {
        expect(EditorComponent._store.props.className).toBe('Editor');
    });
});

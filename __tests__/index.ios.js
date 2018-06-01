import 'react-native';
import React from 'react';
import APP from '../App.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <APP />
    );
});

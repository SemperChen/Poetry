import {
    createReactNavigationReduxMiddleware,
    createNavigationPropConstructor,
} from 'react-navigation-redux-helpers';

const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);
const navigationPropConstructor = createNavigationPropConstructor('root');

export { reactNavigationReduxMiddleware, navigationPropConstructor };
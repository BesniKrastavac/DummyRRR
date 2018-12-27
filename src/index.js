import React from 'react';
import ReactDOM from "react-dom";
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { ConnectedRouter, connectRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';

import { someId } from './reducers/SomeId';
import { dummyText } from './reducers/DummyText';

import { load } from './Actions/Actions';

import NavigationConnector, { navigationRoutePath } from './components/navigation/Navigation';
import ComponentConnector, { componentRoutePath } from './components/component/Component';
import AnotherComponentConnector, { anotherComponentRoutePath } from './components/anotherComponent/AnotherComponent';

const history = createBrowserHistory();

const app = combineReducers({
    someId, dummyText, router: connectRouter(history)
});

const store = createStore(
    app,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

store.dispatch(load());

const ConnectedNavigation = NavigationConnector(connect);
const ConnectedComponent = ComponentConnector(connect);
const ConnectedAnotherComponent = AnotherComponentConnector(connect);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path={navigationRoutePath} component={ConnectedNavigation} />
                <Route exact path={componentRoutePath} component={ConnectedComponent} />
                <Route exact path={anotherComponentRoutePath} component={ConnectedAnotherComponent} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
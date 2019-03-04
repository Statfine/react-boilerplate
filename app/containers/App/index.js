/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NewPagePage from 'containers/NewPage/Loadable';
import MaterialPage from 'containers/MaterialPage/Loadable';
import StateAsynTestPage from 'containers/StateAsynTest/Loadable';
import ComAndPureComPage from 'containers/ComAndPureCom/Loadable';
import ImmutablePagePage from 'containers/ImmutablePage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/new" component={NewPagePage} /> {/* 新生命周期 */}
        <Route exact path="/material" component={MaterialPage} /> {/* material组件 */}
        <Route exact path="/state" component={StateAsynTestPage} /> {/* setState */}
        <Route exact path="/purecom" component={ComAndPureComPage} /> {/* componen和PureComponent */}
        <Route exact path="/immutable" component={ImmutablePagePage} /> {/* immutable */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

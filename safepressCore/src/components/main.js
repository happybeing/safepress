'use strict';

var SafepressCoreApp = require('./SafepressCoreApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={SafepressCoreApp}>
    <Route name="/" handler={SafepressCoreApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});

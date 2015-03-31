var PlaylistApp = require('./PlaylistApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={PlaylistApp}>
    <Route name="/" handler={PlaylistApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});

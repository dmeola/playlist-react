'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var PlaylistApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    PlaylistApp = require('../../../src/scripts/components/PlaylistApp.js');
    component = React.createElement(PlaylistApp);
  });

  it('should create a new instance of PlaylistApp', function () {
    expect(component).toBeDefined();
  });
});

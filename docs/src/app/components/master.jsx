var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('mui');
var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;
var Menu = mui.Menu;
var IconButton = mui.IconButton;
var AppLeftNav = require('./app-left-nav.jsx');

var Master = React.createClass({

  mixins: [Router.State],

  render: function() {

    var title =
      this.isActive('get-started') ? 'Get Started' :
      this.isActive('css-framework') ? 'Css Framework' :
      this.isActive('components') ? 'Components' : '';
    var MainTitle='MA441';
    var title=title!='' ? '-'+title:title;
    title = MainTitle+title;
    var MainButton = (
      <IconButton
        className="main-icon-button"
        icon="social-school"
        href="https://kwangkim.github.com/course"
        linkButton={true} />
    );
    var webTitle = ' MA441';
    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          className="mui-dark-theme"
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          title={title}
          zDepth={0}>
          <h1 className="mui-app-bar-title-right">{webTitle}</h1>
        </AppBar>

        <AppLeftNav ref="leftNav" />

        <RouteHandler />

        <div className="footer full-width-section mui-dark-theme">
          <p>
            Forked from <a href="http://callemall.github.io/material-ui/#/">React Material by Call-Em-All</a>.
          </p>
          {MainButton}
        </div>

      </AppCanvas>
    );
  },

  _onMenuIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }

});

module.exports = Master;

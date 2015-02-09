var React = require('react');
var Router = require('react-router');
var mui = require('mui');
var RaisedButton = mui.RaisedButton;
var HomeFeature = require('./home-feature.jsx');
var Setting= require('../../setting.jsx');

var HomePage = React.createClass({

  mixins: [Router.Navigation],

  render: function() {
    var divstyle = {textAlign: 'center'}; //http://stackoverflow.com/a/6044406
    return (
      <div className="mui-app-content-canvas">
        <div className="home-page-hero full-width-section">
          <div className="home-page-hero-content">
            <div style={divstyle}>
            <img className="svg-logo" src="http://upload.wikimedia.org/wikipedia/commons/d/d2/Tangent-calculus.svg" />
            </div>
            <div className="tagline">
              <h1 className="brand-name">{Setting.CourseID}-{Setting.SectionID}</h1>
              <h2 className="mui-font-style-headline">
                {Setting.CourseTitle}
              </h2>
              <RaisedButton className="demo-button" label="Demo" onTouchTap={this._onDemoClick} linkButton={true} />
              <RaisedButton className="github-button" label="GitHub" linkButton={true} href="https://github.com/callemall/material-ui" />
            </div>
          </div>
        </div>

        <div className="full-width-section home-purpose">
          <p className="full-width-section-content">
            {Setting.CourseDescription}
          </p>
        </div>

        <div className="full-width-section home-features">

          <div className="feature-container full-width-section-content">
            <HomeFeature heading="Get Started" route="get-started" img="images/get-started.svg" />
            <HomeFeature heading="CSS Framework" route="css-framework" img="images/css-framework.svg" />
            <HomeFeature heading="Components" route="components" img="images/components.svg" />
          </div>

        </div>

        <div className="full-width-section home-contribute">
          <div className="full-width-section-content">
            <h3>
              Want to help make this <span className="no-wrap">project awesome?</span> <span className="no-wrap">Check out our repo.</span>
            </h3>
            <RaisedButton label="GitHub" primary={true} linkButton={true} href="https://github.com/callemall/material-ui" />
          </div>
        </div>

      </div>
    );
  },

  _onDemoClick: function() {
    this.transitionTo('components');
  }

});

module.exports = HomePage;

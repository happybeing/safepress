'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;


var PostsStore = require( '../stores/PostsStore');

// MATERIAL UI INIT
var mui = require( 'material-ui' );
var ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;


var Editor = require( './Editor' );
var EditorList = require( './EditorList' );
// import Editor

// CSS
require('normalize.css');
require('../styles/main.css');

var SafepressCoreApp = React.createClass({
    mixins: [ ],
    childContextTypes: 
    {
        muiTheme: React.PropTypes.object
    },
      componentWillMount() {
        ThemeManager.setPalette({
          accent1Color: Colors.deepOrange500
        });
    },
    getChildContext: function() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    getInitialState: function() 
    {
        return PostsStore.getState();
    },
    componentDidMount: function() 
    {
        PostsStore.listen( this.onChange );
    },
    componentWillUnmount: function() 
    {
        PostsStore.unlisten( this.onChange );

    },

    onChange(state) 
    {
        console.log( 'STATE PASSED??', state );
        this.setState(state);
    },

    render: function() {
        return (
            <div className="main">
                <ReactTransitionGroup transitionName="fade">
                    <Editor allPosts={ this.state.posts }/>
                    <EditorList list={ this.state.posts }/>
                </ReactTransitionGroup>
            </div>
        );
    }
});

module.exports = SafepressCoreApp;

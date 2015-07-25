'use strict';

var React = require('react/addons');
var PostActionCreators = require( '../actions/PostActionCreators');


var mui = require( 'material-ui' );
var FlatButton = mui.FlatButton;
var TextField = mui.TextField;


require('styles/Editor.scss');

var Editor = React.createClass(
{
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
        return {};
      },
    //   getDefaultProps: function() {},
    //   componentWillMount: function() {},
    //   componentDidMount: function() {},
    //   shouldComponentUpdate: function() {},
    //   componentDidUpdate: function() {},
    //   componentWillUnmount: function() {},

    /**
     * Triggers Add Post Action
     */
    _addPost: function( )
    {

        let post = this.state.postName;
        PostActionCreators.addPost( post );
        console.log( 'THISISHAPPENING', post );

    },

    render: function () {
        return (
            <div className="Editor">
              <h1>SafePress Editor</h1>
              <p>Content for Editor</p>

              <TextField
                hintText='Post Name'
                valueLink={this.linkState('postName')} />
              <FlatButton label="Add Post" onClick={this._addPost}/>
            </div>

          );
    }
});


module.exports = Editor;

'use strict';

var React = require('react/addons');
var mui = require( 'material-ui' );
var List = mui.List;

var ThemeManager = new mui.Styles.ThemeManager();


require('styles/EditorList.scss');

var EditorList = React.createClass({
    mixins: [],

    getInitialState: function() {
        return {};
    },
    // getDefaultProps: function() {},
    componentWillMount: function() 
    {
        this.updateListState();       
    },
    // // componentDidMount: function() {},
    componentWillReceiveProps: function() 
    {
        this.updateListState();       

    },
    updateListState: function( )
    {
        let list = this.props.list;
        var listToRender = [];

        if( list )
        {
            console.log( 'LIST', list );
            for (var key in list ) 
            {
                console.log( 'keyyy', list[key] );
              listToRender.push(<li 
                key={key} 
                primarytext={list[key]}>
                {list[key]}
                </li>);
            }

            this.setState(
                { 
                    list: list,
                    listToRender: listToRender
                 });
        }
    },
    // componentDidUpdate: function() {},
    // componentWillUnmount: function() {},

    render: function () {

        console.log( 'ourlisssstt', this.state.list );
        return (<h1>
                { this.state.listToRender }
            </h1>
            );
    }
});

module.exports = EditorList;

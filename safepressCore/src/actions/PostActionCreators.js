var alt = require('../alt');


var PostActionCreators = alt.createActions(function () 
{
    this.addPost = function(post)
    {
        this.dispatch(post);
    };
}); 

module.exports = PostActionCreators; 


var alt = require('../alt');
var _ = require('lodash');

var PostActionCreators = require( '../actions/PostActionCreators');
var alt = require('../alt');

class PostsStore {
    constructor() {
        this.posts = [];

        this.bindListeners({
          handleAddPost: PostActionCreators.ADD_POST
        });
    }

   /*
    * DREAMCODE
    *
    * Would retrieve the site manifest from SAFE public area.
    * URI derived from input / localstorage in the browser. 
    * This requires read perms for  *that * manifest.
    *
    * with Alt, this should be handles as a util
    * 
    * @return {[array]}     [All posts in the store]
    */
    getAllPosts( ) 
    {

        var allPosts = _.clone_posts;

        return allPosts;
        
    }

    handleAddPost(post) 
    {
        this.posts.push( post );
    }
}

module.exports = alt.createStore(PostsStore, 'PostsStore');

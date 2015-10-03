/**
 * Module dependencies.
 */
let parse = require('co-body');
let render = require('./lib/render');

// Set up monk
let monk = require('monk');
let wrap = require('co-monk');
let db = monk('localhost/koaBlog');

// Wrap monk in generator goodness
let posts = wrap(db.get('posts'));

// And now... the route definitions
/**
 * Post listing.
 */
module.exports.list = function *list() {
  let postList = yield posts.find({});
  this.body = yield render('list', { posts: postList });
};

/**
 * Show creation form.
 */
module.exports.add = function *add() {
  this.body = yield render('new');
};

/**
 * Show post :id.
 */
module.exports.show = function *show(id) {
  let post = yield posts.findOne({_id:id});
  if (!post) this.throw(404, 'invalid post id');
  this.body = yield render('show', { post: post });
};

/**
 * Create a post.
 */
module.exports.create = function *create() {
  let post = yield parse(this);
  post.created_at = new Date;

  yield posts.insert(post);
  this.redirect('/');
};

/**
 * Show edit form
 */
module.exports.edit = function *edit(id) {
  let post = yield posts.findOne({_id:id});
  this.body = yield render('edit', { post: post });
};

/**
 * Update post
 */
module.exports.update = function *update(id) {
  let post = yield parse(this);
  yield posts.updateById(id, post);
  this.redirect('/post/' + id);
};

/**
 * Remove post
 */
module.exports.remove = function *remove(id) {
  yield posts.remove({_id:id});
  this.redirect('/');
};
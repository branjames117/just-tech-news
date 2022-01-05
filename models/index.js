const User = require('./User');
const Post = require('./Post');

// create associations between user and posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Post };

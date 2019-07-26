const Post = require('../models/Post');

module.exports = async (req, res) => {
	// const posts = await Post.find({});
	res.redirect('/');
	// res.render('homepage', {
	// 	posts,
	// 	user: req.user
	// });
};

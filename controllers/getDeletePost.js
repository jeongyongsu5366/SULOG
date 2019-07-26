const Post = require('../models/Post');

module.exports = async (req, res) => {
	await Post.findByIdAndRemove(req.params.id, function(err, user) {
		if (err) return res.status(500).send('Fail to Delete');
		res.status(200).redirect('/');
	});
};

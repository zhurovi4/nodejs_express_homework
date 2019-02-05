const PostData = require('../models/news.model');

exports.test = function (req, res) {
    res.send('Test controller!');
};

exports.post_create = function (req, res) {
    let post = new PostData(
        {
            title: req.body.title,
            content: req.body.content
        }
    );

    post.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Post added successfully')
    })
};

exports.post_details = function (req, res) {
    PostData.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.send(post);
    })
};

exports.post_update = function (req, res) {
    PostData.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, post) {
        if (err) return next(err);
        res.send('News updated!!!');
    });
};

exports.post_delete = function (req, res) {
    PostData.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

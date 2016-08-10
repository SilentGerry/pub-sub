module.exports = function() {
    var router = require('express').Router();
    var middleware = require('./sub/sub.middleware')();

    console.log(middleware);
    console.log(middleware.fail);
    console.log(middleware.post);
    router.route('/')
        .put(middleware.fail)
        .get(middleware.fail)
        .delete(middleware.fail)
        .post(middleware.post);
    return router;
};

module.exports = function(firebase) {
    var gcloud = require('gcloud')({ projectId: 'tutorial2-1470427656482' });
    var db = firebase.database();
    var ref = db.ref('/messages');
    // ref.on('value', function(snapshot) {
    //     console.log(snapshot.val());
    // }, function(error) {
    //     console.log('The read failed: ' + error);
    // });
    return {
        fail: function(req, res) {
            console.log('Not a post request...');
            res.json({ success: false, message: 'Unauthorized attempt to access server...' });
            return res.end();
        },
        post: function(req, res) {
            console.log('Incoming post request...');
            console.log(req.body);
            if (!req.body.message) {
                res.json({ success: true, message: 'There was no messge attached...' });
                return res.end();
            }
            ref.push({
                message: req.body.message
            });
            res.json({ success: true, message: 'Its working...' });
            return res.end();
        }
    };
};

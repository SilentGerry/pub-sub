module.exports = function() {
	var gcloud = require('gcloud')({projectId: 'tutorial2-1470427656482'});
	
	return {
		fail: function(req, res) {
			console.log('Not a post request...');
			res.json({success: false, message:'Unauthorized attempt to access server...'});
			return res.end();
		},
		post: function(req, res) {
			console.log('Incoming post request...');
			console.log(req);
			res.json({success: true, message:'Its working...'});
			return res.end();
		}
	};
};
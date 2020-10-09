var keystone = require('../../../');

exports = module.exports = function(req, res) {

	return res.redirect('/');

	/*
	 * [WEBAPP-2433] disable admin UI home view.	
	keystone.render(req, res, 'home', {
		section: 'home',
		page: 'home',
		title: keystone.get('name') || 'Keystone',
		orphanedLists: keystone.getOrphanedLists()
	});*/

};

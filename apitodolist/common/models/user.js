'use strict';

module.exports = function(User) {
	User.afterRemote('create', function(context, user, next) {	
	   // var app = require('../../server/server');
	        context.res.jsonp({ 
	                        metadata:{statusCode:200,
	                        message:'Registrasi Berhasil. Silahkan login untuk mendapatkan AccessToken'},
	                        response: {
	                        	id: user.id, 
	                        	email: user.email,
	                        	username: user.username, 
	                        } 
	                      }); 
	});
};

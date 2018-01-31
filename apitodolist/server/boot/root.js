'use strict';
var bodyParser = require('body-parser');

module.exports = function(app) {
  // Install a `/` route that returns server status
  var router = app.loopback.Router();
  router.get('/', app.loopback.status());
  app.use(router);
  app.use(bodyParser.json());

	var User = app.models.user;
   app.post('/api/users/login', function(req, res) {
   	//console.log(req);
    User.login({
      email: req.body.email,
      password: req.body.password,
    }, 'user', function(err, token) {
      if (err) {
        res.jsonp({ metadata: err,response: null });          
        return;
      }

      User.find( {where: {email:req.body.email}}, function(err, results) {
        if (err) 
        	return res.status(401).send(err);       
        results.forEach(function(result) {
        var data = result.toJSON();
        res.jsonp({ 
                    metadata:{statusCode:200,
                    message:'Login Berhasil.'},
                    response: {id: data.id, 
                    token: token.id, 
                    email: req.body.email } 
                  }); 
       
        });          
      });    
    });
  });
};

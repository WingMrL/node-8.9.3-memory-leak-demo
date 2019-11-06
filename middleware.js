 var express = require('express');
 var router = express.Router();

 var createNamespace = require('cls-hooked').createNamespace;

 var session = createNamespace('req-session');

 router.use(function(req, res, next){

     session.bindEmitter(req);
     session.bindEmitter(res);

     res.locals.NODE_ENV = process.env.NODE_ENV || 'test';

     session.run(function(){
           session.set('x-real-ip', '127.0.0.1');
           next();
         });
    });

 module.exports = router;

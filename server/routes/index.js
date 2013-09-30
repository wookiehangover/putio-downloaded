/*jslint node: true */
'use strict';

var request = require('request');
var qs = require('querystring');


exports.files = function(req, res){

  var parentId = '';
  if( req.query.parent_id ){
    parentId = '&parent_id='+req.query.parent_id;
  }

  request({
    url:'https://api.put.io/v2/files/list?oauth_token=' + process.env.TOKEN + parentId,
    json: true
  }, function(err, response, body){
    if( err ){
      return res.json(500, { error: err });
    }

    if( body.files ){
      body = body.files;
    }

    res.json(body);
  });
};

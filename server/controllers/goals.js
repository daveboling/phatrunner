'use strict';


var Goal = require('../models/user');


exports.index = function(req, res){
  Goal.all(req.user._id, function(err, goals){
    res.send({goals: goals, user: req.user});
  });
};


exports.new = function(req, res){
  Goal.create(req.body, req.user._id, function(err, goal){
    res.status(200).end();
  });
};


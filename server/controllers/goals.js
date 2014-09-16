'use strict';


var Goal = require('../models/goal');


exports.index = function(req, res){
  Goal.all(req.user._id, function(err, goals){
    res.send({goals: goals, user: req.user});
  });
};

exports.new = function(req, res){
  console.log(req.body);
  Goal.create(req.body, req.user._id, function(err, goal){
    res.send({goal: goal});
  });
};


'use strict';


var Goal = require('../models/goal');


exports.index = function(req, res){
  Goal.all(req.user._id, function(err, goals){
    res.send({goals: goals, user: req.user});
  });
};

exports.new = function(req, res){
  Goal.create(req.body, req.user._id, function(err, goal){
    res.send({goal: goal});
  });
};

exports.edit = function(req, res){
  console.log(req.params);
  Goal.findById(req.params.id, function(err, goal){
    res.send({goal: goal});
  });
};

exports.addFood = function(req, res){
  Goal.addFood(req.params.goalId, req.body, function(err, goal){
    res.status(200).end();
  });
};

exports.addRun = function(req, res){
  Goal.addRun(req.params.goalId, req.body, function(err, goal){
    res.status(200).end();
  });
};

exports.addWalk = function(req, res){
  Goal.addWalk(req.params.goalId, req.body, function(err, goal){
    res.status(200).end();
  });
};

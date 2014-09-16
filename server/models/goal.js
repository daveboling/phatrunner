'use strict';

var Mongo = require('mongodb');


function Goal(o, userId){
  this.name = o.name || 'My Running Goal!';
  this.userId = Mongo.ObjectID(userId);
  this.goalCalories = o.goalCalories;
  this.date = new Date();

  this.burned = 0;
  this.foods = [];
  this.runs = [];
  this.walks = [];
}

Object.defineProperty(Goal, 'collection', {
  get: function(){ return global.mongodb.collection('goals');}
});

Object.defineProperty(Goal.prototype, 'walking', {
  get: function(){
    return this.walks.reduce(function(sum, walk){return walk.miles + sum;} , 0);
  }
});

Object.defineProperty(Goal.prototype, 'running', {
  get: function(){
    return this.runs.reduce(function(sum, run){return run.miles + sum;} , 0);
  }
});

Goal.create = function(o, userId, cb){
  var goal = new Goal(o, userId);
  Goal.collection.save(goal, cb);
};

Goal.all = function(userId, cb){
  Goal.collection.find({userId: userId}).toArray(cb);
};

Goal.addRun = function(goalId, run, cb){
  Goal.collection.findOne({_id: Mongo.ObjectID(goalId)}, function(err, goal){
    goal.runs.push(run);
    Goal.collection.save(goal, cb);
  });
};

Goal.addWalk = function(goalId, walk, cb){
  Goal.collection.findOne({_id: Mongo.ObjectID(goalId)}, function(err, goal){
    goal.walks.push(walk);
    Goal.collection.save(goal, cb);
  });
};


module.exports = Goal;


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

Object.defineProperty(Goal.prototype, 'hasWalked', {
  get: function(){
    return this.walks.reduce(function(sum, walk){return walk + sum;} , 0);
  }
});

Object.defineProperty(Goal.prototype, 'hasRan', {
  get: function(){
    return this.runs.reduce(function(sum, run){return run + sum;} , 0);
  }
});

Object.defineProperty(Goal.prototype, 'intake', {
  get: function(){
    return this.food.reduce(function(sum, food){return food.calories + sum;} , 0);
  }
});

Goal.findById = function(goalId, cb){
  var _id = Mongo.ObjectID(goalId);
  console.log(_id);
  Goal.collection.findOne({_id: _id}, cb);
};

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

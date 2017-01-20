import { Meteor } from 'meteor/meteor';

Comments = new Mongo.Collection('comments');

// Meteor.publish('allComments', function () {
//   const cursor = Comments.find();
//   const self = this;
//
//   const handle = cursor.observeChanges({
//     added: function(id, fields) {
//       self.added('comments', id, fields);
//       console.log('added', id, fields);
//     },
//
//     removed: function(id) {
//
//       self.removed('comments', id);
//       console.log('removed', id);
//     },
//
//     changed: function(id, fields) {
//       self.changed('comments', id, fields);
//       console.log('changed', id, fields);
//     }
//   });
//   this.ready();
//
//   this.onStop(function() {
//     console.log('stopped');
//     handle.stop();
//   });
// });

Comments.allow({
  insert: (userId, doc) => {
    return !!userId;
  },
  update: (userId, doc) => {
    return false;
  },
  remove: (userId, doc) => {
    return false;
  }
});

Meteor.publish('allComments', function () {
  let userId = this.userId;

  if (userId) {
    return Comments.find();
  } else {
    return this.ready();
  }
});

Meteor.methods({
  callMe: (name) => {
    console.log(name);
    return `hello, ${name}`;
  }
});

Meteor.startup(() => {
  // code to run on server at startup
  console.log('___ reactor started ___');
});

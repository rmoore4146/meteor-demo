Comments = new Mongo.Collection('comments');

// Meteor.call('callMe', 'bleh', (err, result) => {
//   if (err) {
//     console.log('errrrrrror');
//   }
//   console.log(result);
// });

Meteor.methods({
  callMe: (name) => {
    console.log(`name: ${name}`);
  }
});

//subscribe to comments
Meteor.subscribe('allComments', function() {
  console.log('ready freddy');
});

Template.CommentList.helpers({
  comments: function () {
    return Comments.find();
  },
  formatTimestamp: function (timestamp) {
    return moment(timestamp).format('MMMM Do YYYY, h:mm:ss a');
  }
});


Template.CommentAdd.events({
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var formEl = tmpl.find('form');
    var commentEl = tmpl.find('[name=comment]');
    var comment = commentEl.value;

    Comments.insert({
      login: 'cmather',
      timestamp: new Date,
      room: 'main',
      comment: comment
    });

    formEl.reset();
  }
});
Meteor.startup(function(){

  if(Polls.find().count()==0){
    var samplePolls = [{
      questions: "Its not awesome",
      choices:[
        {text:"Maybe",votes:0},
        {text:"Perhaps",votes:0},
        {text:"I am Batman!",votes:0}
      ]
    },{
      questions:"I am batman",
      choices:[
        {text:"Maybe",votes:0},
        {text:"Perhaps",votes:0},
        {text:"I am Batman!",votes:0}
      ]
    }];
    _.each(samplePolls,function(poll){
      Polls.insert(poll);
    });

  }
});

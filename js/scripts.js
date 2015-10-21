$(function() {
  var teamSection = $("#teams");

  var allParticipants = [];
  var teamNumber = 0;

  $("#team-maker").click(function() {
    teamNumber = parseInt($("#teams-number").val(), 10);
    allParticipants = _.compact($("#names").val().split("\n"));

    createEmptyTeams();
    distributeParticipants();
  });

  function createEmptyTeams() {
    teamSection.html("");

    for(var i = 0; i < teamNumber; i ++) {
      var teamId = "team_" + i;
      var teamName = teamId;

      createEmptyTeam(teamId, teamName).appendTo(teamSection);
    }
  }

  function createEmptyTeam(teamId, teamName) {
    var teamContainer = $("<li/>", { "id": teamId });
    $("<span/>", { "text": teamName }).appendTo(teamContainer);
    $("<ul/>").appendTo(teamContainer);

    return teamContainer;
  }

  function distributeParticipants() {
    var max = allParticipants.length;
    for(var i = 0; i < max; i++) {
      var index = Math.floor(Math.random() * allParticipants.length)
      var participant = $("<li/>", { "text": allParticipants[index] });
      allParticipants.splice(index, 1);

      var teamId = "team_" + (i % teamNumber);
      $("li#" + teamId + " ul").append(participant);
    }
  }
});

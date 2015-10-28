$(function() {
  var $participants = $("#participants");
  var $roommies = $("#roommies");

  var $manuallySelected = $([]);
  var selectedTeam = "";

  $participants.find("div").click(function(e) {
    var $target = $(e.target);
    selectedTeam = $target.attr("class");

    $manuallySelected.removeClass("selected");
    $manuallySelected = $target;
    $target.addClass("selected")
  })

  $("#button").click(function() {
    drawFromAnotherTeam(selectedTeam)
  })

  function drawFromAnotherTeam(team) {
    $divs = $participants.find("div");
    var remainingParticipants = $divs.length;

    var drawComplete = false;

    while(!drawComplete) {
      var index = Math.floor(Math.random() * remainingParticipants)
      var $winner = $($divs[index]);

      if(!$winner.hasClass(selectedTeam)) {
        drawComplete = true;
      }
    }

    var p1 = $manuallySelected.text();
    var p2 = $winner.text();

    alert("It's a match! " + p1 + " <3 " + p2);

    var $span = $("<div/>", { "text": p1 + " - " + p2});

    $roommies.append($span);

    $winner.remove();
    $manuallySelected.remove();
    selectedTeam = "";
  }
});

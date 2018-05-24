var teamA = 0;
var teamB = 0;

function score(points, team) {
  team = "team" + (team ? "B" : "A");
	if (window[team] + points >= 0) window[team] += points;
	document.querySelectorAll("p")[team == "teamA" ? 0 : 1].textContent = window[team];
}

document.querySelectorAll("section")[0].addEventListener("click", function(e) {
  if (e.target.tagName == "DIV") score(parseInt(e.target.textContent), 0);
});
document.querySelectorAll("section")[1].addEventListener("click", function(e) {
  if (e.target.tagName == "DIV") score(parseInt(e.target.textContent), 1);
});

document.querySelectorAll("h2")[0].addEventListener("click", function() {
  document.execCommand("selectAll", false, null);
});

document.querySelectorAll("h2")[1].addEventListener("click", function() {
  document.execCommand("selectAll", false, null);
});

document.addEventListener("keypress", function(e) {
  if ((e.keyCode || e.which) == 13) return false;
});

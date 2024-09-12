var cardioModal = document.getElementById('cardioModal');
var cardioBtn = document.getElementById("cardioBtn");
var cardioSpan = document.getElementsByClassName("close")[0];

cardioBtn.onclick = function() {
  cardioModal.style.display = "block";
}

cardioSpan.onclick = function() {
  cardioModal.style.display = "none";
}

var weightTrainingModal = document.getElementById('weightTrainingModal');

var weightTrainingBtn = document.getElementById("weightTrainingBtn");

var weightTrainingSpan = document.getElementsByClassName("close")[1];
 
weightTrainingBtn.onclick = function() {
  weightTrainingModal.style.display = "block";
}

weightTrainingSpan.onclick = function() {
  weightTrainingModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == cardioModal) {
    cardioModal.style.display = "none";
  }
  if (event.target == weightTrainingModal) {
    weightTrainingModal.style.display = "none";
  }
}

var cards = document.querySelectorAll(".card");
var people = document.querySelector("#number");
var bill = document.querySelector("#total");
var button = document.querySelector("button");
var tipAmount = document.querySelector(".amnt");
var totalAmount = document.querySelector(".payment");

function updateDom(tip,total) {
  tipAmount.textContent = tip;
  totalAmount.textContent = total;
}
function calculate() {
  if (
    bill.value != "" &&
    people.value != "" &&
    document.querySelector(".selected") != null
  ) {
    var percent = document
      .querySelector(".selected")
      .textContent.match(/\d+/)[0];
    var tip = (bill.value * (percent / 100)) / people.value;
    var total = bill.value / people.value + tip;
    updateDom(tip,total);
  }
}
function reset(){
  document.querySelector(".selected").classList.remove("selected");
  bill.value = "";
  people.value = "";
  tipAmount.textContent = "";
  totalAmount.textContent = "";
}
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    if (document.querySelector(".selected") != null) {
      document.querySelector(".selected").classList.remove("selected");
    }
    card.classList.add("selected");
    calculate();
  });
});

bill.addEventListener("input", function () {
  calculate();
});
people.addEventListener("input", function () {
  calculate();
});

button.addEventListener("click", function () {
  reset();
});

const billAmount = document.querySelector(".billamount");
const numberGuest = document.querySelector(".numberguest");
const serviceQuality = document.querySelector(".servicequality");
const calcBtn = document.querySelector(".calcBtn");
const tipBox = document.querySelector(".tip");

function clear() {
  tipBox.innerHTML = "";
}

function calculate() {
  if (billAmount.value && serviceQuality.value && numberGuest.value) {
    const tip =
      (billAmount.value * (serviceQuality.value / 100)) / numberGuest.value;

    billAmount.value = "";
    numberGuest.value = "";
    serviceQuality.value = "";
    tipBox.innerHTML = `Tip $${tip} each`;
  } else {
    tipBox.innerHTML = "Please try again";
  }

  setInterval(clear, 2000);
}

calcBtn.addEventListener("click", calculate);

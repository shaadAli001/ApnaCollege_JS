const Baseurl =
  "https://v6.exchangerate-api.com/v6/30751a969334a2851884d880/pair/";

const dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

window.addEventListener("load", () => {
  updateInfo();
});

for (let select of dropdowns) {
  for (Currcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = Currcode;
    newOption.value = Currcode;
    if (select.name === "from" && Currcode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && Currcode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (event) => {
    updateFlag(event.target);
  });
}

const updateFlag = (element) => {
  let Currcode = element.value;
  let CountryCode = countryList[Currcode];
  let newSrc = `https://flagsapi.com/${CountryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click",(event) => {
  event.preventDefault();
  updateInfo();
});

const updateInfo = async () => {
  let amount = document.querySelector(".amount input");
  let amountVal = amount.value;
  if (amountVal === "" || amountVal < 1) {
    amountVal = 1;
    amount.value = "1";
  }

  const URL = `${Baseurl}/${fromCurr.value}/${toCurr.value}`;
  let response = await fetch(URL);
  let data = await response.json();
  let data2 = data.conversion_rate;
  let finalAmount = amountVal * data2;
  msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

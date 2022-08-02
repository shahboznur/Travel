var elP = document.querySelector(".xabar");

var result = Number(prompt("Sayohatga bormoqchimisiz pulingizni dollar qiymatida kiriting?").trim());

var moneyValue = 500;

if (isNaN(result)) {
  elP.textContent = "Iltimos, sonlarda dollarni qiymatini kiriting!";
} else {
  if (result >= moneyValue) {
    elP.textContent = "Siz sayohatga borishingiz mumkin.";
  } else {
    elP.textContent = "Pulingiz 500$ dan kam, ming afsus siz sayohatga bora olmaysiz.";
  }
}
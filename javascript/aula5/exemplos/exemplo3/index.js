setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("relogio").innerHTML = d.toLocaleTimeString();
}

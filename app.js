
function getNumber() {
  const code = document.getElementById("country").value;
  Telegram.WebApp.sendData(JSON.stringify({ action: "get_number", code }));
}
function changeNumber() {
  Telegram.WebApp.sendData(JSON.stringify({ action: "change_number" }));
}
Telegram.WebApp.ready();
document.getElementById("assignedNumber").innerText = "+8801234567890";
document.getElementById("otpList").innerHTML = "<li>478912</li><li>834762</li><li>123904</li>";

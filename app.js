
function reloadData() {
  const otps = ["1234", "6543", "9911"]; // Placeholder
  const number = "+8801234567890"; // Placeholder

  document.getElementById("number").innerText = number;
  const ul = document.getElementById("otpList");
  ul.innerHTML = "";
  otps.forEach(otp => {
    const li = document.createElement("li");
    li.innerText = "• OTP: " + otp;
    ul.appendChild(li);
  });
}
function mute() {
  alert("🔕 Mute enabled!");
}
function unmute() {
  alert("🔔 Unmute enabled!");
}
window.onload = reloadData;

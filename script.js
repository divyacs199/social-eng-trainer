function generateAttack() {
  const type = document.getElementById("type").value;
  const difficulty = document.getElementById("difficulty").value;

  let message = "";

  if (type === "Email") {
    if (difficulty === "Easy") {
      message = "🚨 URGENT: Your account is locked! Click here immediately.";
    } else if (difficulty === "Medium") {
      message = "Dear user, suspicious login detected. Please verify your account.";
    } else {
      message = "We noticed unusual activity on your account. Review your security settings now.";
    }
  }

  if (type === "SMS") {
    message = "📦 Your package is delayed. Track here: http://fake-link.com";
  }

  if (type === "URL") {
    message = "⚠️ http://secure-bank-login-verification.com";
  }

  document.getElementById("output").innerText = message;
}
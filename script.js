
function checkPassword() {

    let password = document.getElementById("password").value;
    let result = document.getElementById("results");
    let strengthBar = document.getElementById("strength");

    let score = 0;
    let messages = [];

    if (password.length >= 8) {
        score += 20;
    } else {
        messages.push("❌ Minimum 8 characters required");
    }

    if (/[A-Z]/.test(password)) score += 20;
    else messages.push("❌ Add uppercase letter");

    if (/[a-z]/.test(password)) score += 20;
    else messages.push("❌ Add lowercase letter");

    if (/[0-9]/.test(password)) score += 20;
    else messages.push("❌ Add number");

    if (/[^A-Za-z0-9]/.test(password)) score += 20;
    else messages.push("❌ Add special character");

    strengthBar.style.width = score + "%";

    if (score < 40) {
        strengthBar.style.background = "red";
    } else if (score < 80) {
        strengthBar.style.background = "orange";
    } else {
        strengthBar.style.background = "green";
    }

    result.innerHTML = `
        <p><strong>Strength Score:</strong> ${score}/100</p>
        <p><strong>Status:</strong> ${score >= 80 ? "✅ Compliant" : "⚠️ Non-Compliant"}</p>
        <p>${messages.join("<br>")}</p>
    `;
}

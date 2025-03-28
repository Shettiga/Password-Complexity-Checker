function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthText = document.getElementById("strength");
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = "";

    const criteria = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        digit: /\d/.test(password),
        special: /[@$!%*?&#]/.test(password)
    };

    const strengthScore = Object.values(criteria).filter(Boolean).length;
    let strength = "Very Weak";
    let colorClass = "weak";

    if (strengthScore === 5) {
        strength = "Very Strong";
        colorClass = "strong";
    } else if (strengthScore === 4) {
        strength = "Strong";
        colorClass = "strong";
    } else if (strengthScore === 3) {
        strength = "Moderate";
        colorClass = "moderate";
    } else if (strengthScore === 2) {
        strength = "Weak";
        colorClass = "weak";
    }

    // Correct way to update the class
    strengthText.textContent = "Password Strength: " + strength;
    strengthText.classList.remove("weak", "moderate", "strong");
    strengthText.classList.add(colorClass);

    // Use <li> for better formatting
    if (!criteria.length) suggestionsList.innerHTML += "<li>Password should be at least 8 characters long.</li>";
    if (!criteria.uppercase) suggestionsList.innerHTML += "<li>Include at least one uppercase letter.</li>";
    if (!criteria.lowercase) suggestionsList.innerHTML += "<li>Include at least one lowercase letter.</li>";
    if (!criteria.digit) suggestionsList.innerHTML += "<li>Include at least one digit.</li>";
    if (!criteria.special) suggestionsList.innerHTML += "<li>Include at least one special character (@$!%*?&#).</li>";
}

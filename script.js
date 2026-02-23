function checkPassword() {
    // !! IMPORTANT: The correct password is in the code. This is NOT secure. !!
    const correctPassword = "MySecretPassword123"; 
    const userInput = document.getElementById("passwordInput").value;
    const feedbackMessage = document.getElementById("feedbackMessage");

    if (userInput === correctPassword) {
        feedbackMessage.textContent = "Correct! Welcome.";
        feedbackMessage.className = "correct";
    } else {
        feedbackMessage.textContent = "Incorrect password. Please try again.";
        feedbackMessage.className = "incorrect";
    }
}

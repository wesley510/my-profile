function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((sec) => {
        sec.style.display = 'none'; // Hide all sections
    });
    document.getElementById(section).style.display = 'block'; // Show the selected section
}

function showEmailAlert() {
    alert("You can reach me at wesleymthunzi033@gmail.com");
}

function submitMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields before submitting.");
    } else {
        alert(`Your message has been submitted.\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        document.getElementById("name").value = ""; // Clear the name input
        document.getElementById("email").value = ""; // Clear the email input
        document.getElementById("message").value = ""; // Clear the textarea
    }
}
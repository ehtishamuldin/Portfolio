(function() {
    emailjs.init("vC9mfpqz2XVzg2IWr");
})();

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    var formData = new FormData(this);
    var emailData = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        number: formData.get("number"),
        email: formData.get("email"),
        message: formData.get("message")
    };
    document.getElementById("overlay-form").style.display = "block";
    document.getElementById("loader").style.display = "block";
    // Use EmailJS to send email
    emailjs.send("service_k0fouu6", "template_p9xx08l", {
        firstname: emailData.firstname,
        lastname: emailData.lastname,
        number: emailData.number,
        email: emailData.email,
        message: emailData.message
    }).then(function(response) {
        console.log("Email sent successfully:", response);
        document.getElementById("submit-message").innerText = "Message sent successfully!";
        document.getElementById("myForm").reset();
    }, function(error) {
        console.error("Error sending email:", error);
        document.getElementById("submit-message").innerText = "Failed to send message.";
    }).finally(function() {
        // Hide loader
        document.getElementById("loader").style.display = "none";
        document.getElementById("overlay-form").style.display = "none";
    });
});
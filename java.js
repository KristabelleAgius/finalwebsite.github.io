<script>
    function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Create email body with form data
    var body = "Full Name: " + name +
    "\nEmail: " + email +
    "\n\nMessage:\n" + message;

    // Create mailto link with all data
    var mailtoLink = "mailto:kristabelleagius1@gmail.com" +
    "?subject=Contact Form Submission from " + name +
    "&body=" + encodeURIComponent(body);

    // Open email client with populated email
    window.location.href = mailtoLink;

    return false; // Prevent regular form submission
}
</script>

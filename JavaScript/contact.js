if ($_SERVER["REUQEST_METHOD"] == "POST") {

// Checks if the fields of name, email and message are not empty
    if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $message = $_POST["message"];

        $to = "nightwebclub@outlook.com";
        $subject = "New Contact Form Submission";
        $body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}";
        $headers = "From: {$email}";

        if (mail($to, $subject, $body, $headers)) {
            document.write = "Message sent successfully!";
        } else {
            document.write = "Failed to send message.";
        }
    }
}
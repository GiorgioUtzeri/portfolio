<?php
// Vérifier que la requête est de type POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Traitement du formulaire, par exemple enregistrement des données
    echo "Nom : $name, Email : $email, Message : $message";
    header("Location: ../index.html");
    exit();
} else {
    echo "Erreur : Le formulaire n'a pas été soumis correctement.";
}
?>

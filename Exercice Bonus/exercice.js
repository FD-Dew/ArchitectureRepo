function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username === "utilisateur" && password === "motdepasse") {
        alert("Connexion réussie!");
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect!");
    }
}
// Formulaire d'informations
function validerFormulaire() {
    const username = document.myForm.username.value;
    if (username === "") {
        alert("Veuillez entrer un nom d'utilisateur.");
        return false; // Empêcher l'envoi du formulaire
    }
    return true; // Envoyer le formulaire
}

// Fonction pour mettre à jour l'heure chaque seconde
function mettreAJourHeure() {
        const maintenant = new Date();

        // Récupérer l'heure, les minutes et les secondes
        const heures = maintenant.getHours().toString().padStart(2, '0');
        const minutes = maintenant.getMinutes().toString().padStart(2, '0');
        const secondes = maintenant.getSeconds().toString().padStart(2, '0');

        // Format HH:MM:SS
        const heureActuelle = `${heures}:${minutes}:${secondes}`;

        // Afficher l'heure dans l'input
        document.getElementById('heure').value = heureActuelle;
    }

    // Appeler la fonction toutes les secondes
    setInterval(mettreAJourHeure, 1000);

    // Lancer immédiatement la mise à jour
    mettreAJourHeure();
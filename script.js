// Aucune fonctionnalité JS pour le moment, mais cela peut être utilisé pour des animations ou des interactions
console.log("Page MotoCross prête !");

// Initialisation EmailJS
(function () {
    emailjs.init("11nzeZx7Zrxt3IJwZ"); 
    // ⚠️ IMPORTANT : remplace TA_PUBLIC_KEY_ICI par ta vraie Public Key
})();

document.getElementById("contact-form")
.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_94rcr9u",
        "template_qf9pipk",
        this
    )
    .then(function () {
        document.getElementById("form-message").innerHTML =
            "✅ Message envoyé avec succès !";
        document.getElementById("contact-form").reset();
    })
    .catch(function (error) {
        document.getElementById("form-message").innerHTML =
            "❌ Erreur lors de l'envoi.";
        console.error("Erreur EmailJS :", error);
    });
});

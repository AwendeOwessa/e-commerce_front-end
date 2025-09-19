const input = document.querySelector("#tel");
window.intlTelInput(input, {
    initialCountry: "cm", // Cameroun par défaut
    preferredCountries: ["cm", "fr", "us"]
});
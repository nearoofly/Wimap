require('dotenv').config();

// Récupération de la clé API depuis le fichier .env
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

// Chargement de la carte Google Maps avec la clé API
function loadMap() {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  document.head.appendChild(script);
}

// Appel de la fonction pour charger la carte au chargement de la page
window.onload = loadMap;

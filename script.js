// Dictionnaire des descriptions
const descriptions = {
  "HTML5": "HTML5 est le langage de balisage utilisé pour structurer les pages web. Il permet l'intégration de contenu multimédia et une meilleure sémantique.",
  "CSS3": "CSS3 est le langage de style qui permet de styliser les pages HTML. Il offre des animations, des transitions, du responsive design et plus.",
  "JavaScript": "JavaScript est le langage de programmation côté client qui permet de rendre les pages web interactives et dynamiques.",
  "Git & GitHub": "Git est un outil de versionnage, et GitHub est une plateforme de collaboration qui permet de gérer des projets et de travailler en équipe.",
  "Responsive Design": "Le Responsive Design rend les sites web adaptables à tous les écrans (mobile, tablette, desktop) pour une meilleure expérience utilisateur."
};

// Initialiser les compteurs depuis localStorage
const counters = {
  "HTML5": parseInt(localStorage.getItem("HTML5")) || 0,
  "CSS3": parseInt(localStorage.getItem("CSS3")) || 0,
  "JavaScript": parseInt(localStorage.getItem("JavaScript")) || 0,
  "Git & GitHub": parseInt(localStorage.getItem("Git & GitHub")) || 0,
  "Responsive Design": parseInt(localStorage.getItem("Responsive Design")) || 0
};

// Mise à jour initiale des compteurs dans le DOM
function updateCounters() {
  document.getElementById("html5-count").textContent = counters["HTML5"];
  document.getElementById("css3-count").textContent = counters["CSS3"];
  document.getElementById("js-count").textContent = counters["JavaScript"];
  document.getElementById("git-count").textContent = counters["Git & GitHub"];
  document.getElementById("responsive-count").textContent = counters["Responsive Design"];
}

// Gérer les clics sur les boutons
document.querySelectorAll('.skill-btn').forEach(button => {
  button.addEventListener('click', () => {
    const skill = button.getAttribute('data-skill');
    
    // Afficher la description
    const descBlock = document.getElementById('skill-description');
    descBlock.innerHTML = `<p><strong>${skill}</strong> : ${descriptions[skill]}</p>`;

    // Incrémenter et sauvegarder
    counters[skill]++;
    localStorage.setItem(skill, counters[skill]);

    // Rafraîchir les compteurs affichés
    updateCounters();
  });
});

// Initialiser l'affichage des compteurs au chargement
document.addEventListener('DOMContentLoaded', updateCounters);

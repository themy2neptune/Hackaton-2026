/* ============================================================
   CONTENU DU SITE : modifiez uniquement ce fichier.
   Gardez les guillemets "..." et les virgules.
   ============================================================ */
const SITE = {
  titre: "Hackathon 2026",
  accroche: "24 heures pour imaginer, coder et présenter votre projet.",
  date: "À définir",
  lieu: "À définir",
  couleur: "#4f46e5",          // couleur principale (code hexadécimal)
  contact: "contact@exemple.fr",

  // Présentation : un paragraphe par ligne
  presentation: [
    "Bienvenue au Hackathon ! Par équipes, vous allez concevoir un projet autour du thème annoncé le jour J.",
    "Aucun niveau minimum requis : l'important est d'apprendre, de collaborer et de s'amuser."
  ],

  // Thème (laissez "" pour masquer la section)
  theme: "Thème révélé le jour J",

  // Programme : heure + intitulé
  programme: [
    { heure: "09:00", titre: "Accueil et présentation du thème" },
    { heure: "10:00", titre: "Début du hackathon" },
    { heure: "12:30", titre: "Pause déjeuner" },
    { heure: "18:00", titre: "Point d'étape avec les mentors" },
    { heure: "Jour 2 · 10:00", titre: "Fin du développement et dépôt des projets" },
    { heure: "Jour 2 · 11:00", titre: "Présentations devant le jury" },
    { heure: "Jour 2 · 13:00", titre: "Remise des prix" }
  ],

  // Règles
  regles: [
    "Équipes de 3 à 5 personnes.",
    "Tout langage et tout outil sont autorisés.",
    "Le code doit être écrit pendant l'événement.",
    "Respect et fair-play envers tous les participants."
  ],

  // Critères d'évaluation
  criteres: ["Innovation", "Qualité technique", "Utilité du projet", "Qualité de la présentation"],

  // Ressources : déposez les fichiers dans le dossier "ressources"
  // puis ajoutez une ligne ici avec le nom exact du fichier.
  ressources: [
    { nom: "Exemple : Sujet du hackathon (PDF)", fichier: "ressources/sujet.pdf", description: "À remplacer par votre fichier" }
    // { nom: "Jeu de données", fichier: "ressources/donnees.csv", description: "Données à utiliser" },
    // { nom: "Documentation de l'API", lien: "https://exemple.fr/doc", description: "Lien externe" },
  ],

  // FAQ
  faq: [
    { q: "Dois-je apporter mon ordinateur ?", r: "Oui, apportez votre ordinateur portable et son chargeur." },
    { q: "Peut-on venir seul ?", r: "Oui, des équipes seront constituées sur place." }
  ]
};

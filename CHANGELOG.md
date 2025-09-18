# Le Grimoire des Âges : Changelog de Dragon Coder
---

Toutes les modifications notables apportées à ce projet seront documentées dans ce grimoire. Chaque version est un nouveau chapitre de l'histoire de notre Golem de Code.

Le format de ce document est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), et ce projet adhère à la [Gestion Sémantique de Version (SemVer)](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased] - Le Futur en Forge

### Ajouté
-   *Ici reposeront les parchemins des futurs sortilèges et pouvoirs...*

---

## [2.1.0] - 2025-09-18 - Le Golem Robuste

Cette version est une refonte stratégique visant la stabilité absolue. Face aux environnements instables, le Golem a été reconstruit avec des composants plus légers et plus résistants, abandonnant une partie de sa magie visuelle pour une fiabilité à toute épreuve.

### Changé
-   **Philosophie de Commande :** Les commandes sont devenues plus directes et non interactives pour garantir la compatibilité sur un maximum de terminaux.
-   **Dépendances Allégées :** Les paquets `inquirer` et `ora` ont été retirés pour éliminer les causes potentielles de `Segmentation fault` sur les systèmes à ressources limitées.

### Supprimé
-   Les animations de chargement ("spinners") pendant l'exécution des commandes.
-   Les questions de confirmation interactives (ex: pour la commande `improve`).

---

## [2.0.0] - 2025-09-18 - L'Artisan Universel

Une évolution majeure qui a transformé le Golem. Conscient que son destin n'était pas lié à un seul langage, il a abandonné ses outils spécifiques à Python pour devenir un maître artisan du texte, capable de travailler sur n'importe quel type de fichier. Sa magie est devenue universelle.

### Ajouté
-   **Commande `analyze` :** Un nouveau pouvoir pour lire un fichier et en extraire des statistiques clés (lignes, mots, caractères).
-   **Commande `check` :** L'Œil du Maître a été forgé, permettant au Golem de scanner les fichiers à la recherche de tâches en suspens (`TODO`, `FIXME`).
-   **Gabarit Universel :** Un nouveau gabarit de base pour Node.js a été ajouté, servant de fondation pour la création de fichiers multi-langages.

### Changé
-   **Commande `improve` :** Le pouvoir a été reforgé pour effectuer un nettoyage de texte universel (suppression des lignes vides) au lieu d'un formatage spécifique à Python.
-   **Philosophie du Projet :** Le Golem est officiellement devenu un outil de productivité pour tous les développeurs, pas seulement les Pythonistes.

### Supprimé
-   Toute dépendance et logique liées aux outils Python externes (`flake8`, `black`).
-   Le gabarit `basic_script.py`.

---

## [1.0.0] - 2025-09-18 - La Première Étincelle

La version initiale, la naissance du Golem de Code. À ce stade, le concept était de créer un assistant local pour automatiser les tâches de base du développement. L'étincelle de vie a été insufflée, et la première commande a été gravée.

### Ajouté
-   **Naissance du Golem :** Création de la structure du projet, incluant `commander` et `chalk`.
-   **Commande `create` :** Le premier pouvoir du Golem, lui permettant de forger de nouveaux fichiers à partir d'un gabarit prédéfini.
-   **Fondations du Projet :** Mise en place du `README`, de la `LICENSE`, et des fichiers de configuration de base.

---````

<div align="center">

# Le Guide de l'Artisan Contributeur 📜

</div>

Merci de l'intérêt que vous portez à la forge du **Dragon Coder** ! Chaque contribution, qu'il s'agisse d'une ligne de code, d'une suggestion brillante ou d'un rapport de bug, aide à rendre notre Golem de Code plus puissant et plus sage.

Ce document est notre pacte. Il contient les rituels et les conventions que nous, les artisans, suivons pour nous assurer que la forge reste un lieu d'ordre, de qualité et de collaboration respectueuse.

## 🌟 Comment Aider à Forger le Golem

Il existe de nombreuses façons de contribuer, et toutes sont précieuses.

### 🐛 Signaler une Faille dans l'Armure (Rapporter un Bug)

Si vous trouvez une fissure, une faiblesse ou un comportement inattendu chez notre Golem, n'hésitez pas à le signaler.

1.  **Vérifiez d'abord les "Issues" existantes** sur GitHub pour vous assurer que personne n'a déjà signalé cette faille.
2.  Si ce n'est pas le cas, **ouvrez une nouvelle "Issue"**.
3.  Donnez un **titre clair et descriptif** (ex: "La commande `analyze` se bloque sur les fichiers vides").
4.  Dans la description, soyez aussi précis que possible :
    *   **Quelles commandes avez-vous lancées ?**
    *   **Quel était le résultat attendu ?**
    *   **Quel a été le résultat réel ?** (Copiez-collez les messages d'erreur !)
    *   **Quel est votre environnement ?** (Version de Node.js, système d'exploitation...).

### ✨ Proposer un Nouveau Sortilège (Suggérer une Amélioration)

Si vous avez une idée pour un nouveau pouvoir, une nouvelle commande ou une amélioration d'une commande existante, nous voulons l'entendre !

1.  **Ouvrez une nouvelle "Issue"** sur GitHub.
2.  Donnez-lui un titre qui commence par `[Suggestion]` (ex: `[Suggestion] Ajouter une commande 'rename' pour renommer les fichiers`).
3.  Décrivez votre idée avec le plus de détails possible :
    *   **Quel problème votre idée résout-elle ?**
    *   **Comment imaginez-vous la commande fonctionner ?** (Donnez des exemples d'utilisation).
    *   **Pourquoi pensez-vous que c'est un ajout de valeur pour le Golem ?**

### 🛠️ Forger le Code Vous-même (Soumettre une Pull Request)

Si vous souhaitez mettre les mains dans le code et forger une amélioration vous-même, c'est la contribution ultime ! Veuillez suivre ces rituels pour assurer une intégration en douceur.

---

## 📜 Le Rituel de la Forge (Workflow de Contribution au Code)

1.  **Forgez votre propre version (Fork) :**
    Cliquez sur le bouton "Fork" en haut à droite du dépôt pour créer votre propre copie du sanctuaire du Dragon Coder sur votre compte GitHub.

2.  **Clonez votre forge personnelle :**
    Clonez votre fork sur votre machine locale.
    ```bash
    git clone https://github.com/VOTRE_NOM/Dragon-cli-coder.git
    cd Dragon-cli-coder
    ```

3.  **Créez une nouvelle branche pour votre magie :**
    Ne travaillez jamais directement sur la branche `main`. Créez une branche dédiée à votre modification.
    ```bash
    # Pour une nouvelle fonctionnalité
    git checkout -b feature/nom-de-la-feature

    # Pour une correction de bug
    git checkout -b fix/description-du-bug
    ```

4.  **Appliquez votre magie :**
    Faites vos modifications. Écrivez votre code. Ajoutez votre sortilège.

5.  **Respectez le Style de l'Atelier (Code Style) :**
    *   **Clarté avant tout :** Écrivez un code simple, lisible et facile à comprendre.
    *   **Commentez votre magie :** Si vous écrivez une logique complexe, laissez un commentaire pour expliquer votre intention.
    *   Suivez le style général du code existant.

6.  **Gravez votre travail dans la pierre (Commit) :**
    Faites des commits clairs et concis. Nous suivons la convention **Conventional Commits**. Chaque message de commit doit commencer par un type.

    *   `feat:` pour une nouvelle fonctionnalité.
    *   `fix:` pour une correction de bug.
    *   `docs:` pour des changements dans la documentation (comme ce fichier !).
    *   `style:` pour des changements de formatage qui n'affectent pas la logique.
    *   `refactor:` pour une réécriture de code qui ne corrige pas de bug ni n'ajoute de fonctionnalité.
    *   `chore:` pour des tâches de maintenance (mise à jour de dépendances, etc.).

    **Exemple de bon message de commit :**
    ```bash
    git commit -m "feat: Add 'rename' command to rename files"
    ```

7.  **Poussez votre branche vers votre forge personnelle :**
    ```bash
    git push origin feature/nom-de-la-feature
    ```

8.  **Proposez le Pacte (Ouvrir une Pull Request) :**
    Allez sur le dépôt original sur GitHub. Vous verrez un bouton pour ouvrir une "Pull Request" à partir de votre nouvelle branche.
    *   Donnez un titre clair à votre Pull Request.
    *   Dans la description, expliquez ce que vous avez fait et pourquoi. Liez-la à l' "Issue" correspondante si elle existe.

Un Artisan du projet examinera alors votre travail. Nous pourrons discuter, demander des ajustements, et finalement, si tout est en ordre, votre magie sera fusionnée avec le Golem, le rendant plus puissant pour tous.

## 🤝 Notre Pacte de Respect

En contribuant à ce projet, vous acceptez de suivre notre **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)** (que nous devrions créer !). Notre atelier est un lieu de respect, d'entraide et de collaboration constructive.

---

Merci encore pour votre volonté de participer à cette grande forge. Ensemble, nous créons plus qu'un outil : nous bâtissons une légende.

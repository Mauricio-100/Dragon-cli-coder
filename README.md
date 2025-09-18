<div align="center">

```
                           ___====-_  _-====___
                     _--^^^#####//      \\#####^^^--_
                  _-^##########// (    ) \\##########^-_
                 -############//  |\^^/|  \\############-
               _/############//   (@::@)   \\############\_
              /#############((     \\//     ))#############\
             -###############\\    (oo)    //###############-
            -#################\\  / VV \  //#################-
           -###################\\/      \//###################-
          _#/|##########/\######(   /\   )######/\##########|\#_
          |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
          `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
             `   `  `      `   / | |  | | \   '      '  '   '
                              (  | |  | |  )
                             __\ | |  | | /__
                            (vvv(VVV)(VVV)vvv)
```

# Dragon Coder (`dcode`) 🐉

**Votre Artisan de Code Autonome. Forgé dans le feu du terminal.**

</div>

<div align="center">

[![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)](https://github.com/Mauricio-100/Dragon-cli-coder)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D14.x-brightgreen.svg)](https://nodejs.org/)
[![Built with: Commander.js](https://img.shields.io/badge/Built_with-Commander.js-red.svg)](https://commanderjs.com/)
[![Code Style](https://img.shields.io/badge/Code%20Style-Magical-lightgrey.svg)]()

</div>

---

**Dragon Coder (`dcode`)** n'est pas un simple outil. C'est un compagnon. Un golem de code infatigable forgé avec une seule mission : vous libérer des tâches répétitives et fastidieuses du développement pour que vous puissiez vous concentrer sur l'étincelle de la création.

Né de la philosophie que les meilleurs outils sont ceux qui agissent comme une extension de la volonté du développeur, `dcode` ne prétend pas penser à votre place. Il exécute vos intentions avec une précision et une rapidité magiques, transformant des minutes de travail en quelques frappes de clavier.

## ✨ La Magie de l'Artisan

*   **Forge de Code Instantanée :** Créez des squelettes de fichiers à partir de gabarits éprouvés en une seule commande. Fini le syndrome de la page blanche.
*   **Analyse Structurelle :** Obtenez un rapport détaillé sur n'importe quel fichier texte – lignes, mots, caractères – pour comprendre instantanément son ampleur.
*   **Inspection Intelligente :** L'Œil du Maître scanne vos fichiers à la recherche de notes (`TODO`, `FIXME`), vous présentant un rapport clair du travail qu'il reste à accomplir.
*   **Polissage Automatique :** Améliorez la propreté de vos fichiers en un instant. `dcode` nettoie les espaces superflus et met de l'ordre dans votre code.
*   **100% Autonome & Universel :** Aucune dépendance externe comme Python ou des API web. `dcode` est un golem pur, forgé en JavaScript, prêt à travailler sur n'importe quel projet (Node.js, HTML, Markdown, etc.).
*   **Interface Interactive et Guidée :** Grâce à `chalk`, `ora` et `inquirer`, chaque interaction est une expérience visuelle claire et satisfaisante.

## 🎬 Le Golem en Action

Imaginez le flux de travail suivant, condensé en quelques secondes :

![GIF Placeholder: A terminal session showing the dcode commands in action](https://i.imgur.com/gY9T3p6.gif)

*(GIF montrant la séquence : `dcode create api.js`, suivi de `dcode analyze api.js`, l'utilisateur ajoute du code, puis `dcode improve api.js` nettoie le fichier, et enfin `dcode check api.js` affiche les `TODO` restants.)*

## 🛠️ Installation et Activation du Golem

Forger et animer votre propre Golem de Code est un rituel simple.

### Prérequis
*   **Node.js (v14.x ou supérieure)** : Le cœur qui fait battre le golem.

### Le Rituel d'Invocation

1.  **Clonez le Sanctuaire :**
    ```bash
    git clone https://github.com/Mauricio-100/Dragon-cli-coder.git
    cd Dragon-cli-coder
    ```

2.  **Assemblez les Composants Magiques :**
    ```bash
    npm install
    ```

3.  **Accordez le Don d'Exécution :**
    ```bash
    chmod +x dcode.js
    ```

4.  **Liez le Golem à votre Volonté (Activation Globale) :**
    ```bash
    npm link
    ```

5.  **Vérifiez que le lien spirituel est établi :**
    ```bash
    dcode --version
    ```
    *Si la version s'affiche, le Golem est à votre service.*

---

## 📖 Le Grimoire des Commandes

Chaque commande est une incantation qui ordonne au golem d'accomplir une tâche précise.

### `dcode create <filename>`

**Incantation de Forge.** Crée un nouveau fichier à partir d'un gabarit de base, prêt à être rempli de votre logique.

*   **Usage :** `dcode create server.js`
*   **Action :** Le Golem prend le gabarit `basic_node.js` et forge un nouveau fichier nommé `server.js` dans votre dossier actuel.
*   **Résultat Console :**
    ```console
    ⬢ Le Golem forge le fichier server.js...
    ✔ Fichier server.js créé avec succès !
    ```

### `dcode analyze <filename>`

**Incantation d'Omniscience.** Le Golem examine un fichier et vous révèle ses secrets structurels.

*   **Usage :** `dcode analyze server.js`
*   **Action :** Le Golem lit le fichier, compte ses lignes, mots et caractères, et identifie son type.
*   **Résultat Console :**
    ```console
    ⬢ Le Golem analyse server.js...
    ✔ Analyse terminée !

    --- Rapport d'Analyse pour server.js ---
           Type de Fichier: js
            Lignes de Code: 9
                      Mots: 20
                Caractères: 150
    ------------------------------------
    ```

### `dcode check <filename>`

**Incantation de Vigilance.** L'Œil du Maître scanne le fichier à la recherche de marques laissées par le développeur (`TODO`, `FIXME`), vous rappelant les quêtes inachevées.

*   **Usage :** `dcode check server.js`
*   **Action :** Le Golem lit chaque ligne et extrait les commentaires contenant des tâches.
*   **Résultat Console :**
    ```console
    ⬢ L'Œil du Maître inspecte server.js...
    ⚠ Des tâches en suspens ont été trouvées :
      Ligne 7: // TODO: Ajouter la logique principale ici.
    ```

### `dcode improve <filename>`

**Incantation de Polissage.** Le Golem prend un fichier et le nettoie de ses imperfections, comme un artisan polissant une gemme brute.

*   **Usage :** `dcode improve server.js`
*   **Action :** Le Golem vous demandera confirmation, puis il supprimera les lignes vides consécutives et s'assurera que le fichier respecte les conventions de formatage de base.
*   **Résultat Console :**
    ```console
    ? Ceci va modifier server.js sur place. Continuer ? (Y/n) › true
    ⬢ Le Golem polit server.js...
    ✔ Le fichier a été nettoyé !
    ```

---

## 🐲 La Philosophie : Le Pacte de l'Artisan

**`dcode`** est plus qu'un ensemble de commandes ; c'est un pacte entre le développeur et son outil.

*   **Le Golem s'occupe de la Répétition, le Maître s'occupe de la Vision.** Ne perdez plus jamais votre énergie créative à créer des fichiers vides ou à chercher des `TODO` oubliés.
*   **La Qualité est un Rituel, pas une Corvée.** En intégrant `check` et `improve` dans votre flux de travail, vous adoptez une discipline de propreté du code qui élèvera la qualité de tous vos projets.
*   **Le Pouvoir Local est le Vrai Pouvoir.** Dans un monde d'outils cloud et d'API, `dcode` est un bastion de l'autonomie. Il fonctionne hors ligne, ne partage jamais votre code et reste sous votre contrôle total. Il est rapide, fiable et privé.

## 🗺️ La Route à Venir : Éveiller de Nouveaux Pouvoirs

Le Golem n'en est qu'au début de son éveil. Voici les parchemins qui guideront son évolution :

*   [ ] **Gabarits Multiples :** Ajouter une option à `dcode create` pour choisir entre des gabarits (HTML, CSS, JS, etc.).
*   [ ] **Incantation de Refactorisation :** Une commande `dcode refactor` qui pourrait effectuer des transformations de code simples (ex: renommer une fonction dans tout un fichier).
*   [ ] **Mémoire du Golem :** Une commande `dcode history` qui montrerait les dernières actions effectuées par le robot sur le projet.
*   [ ] **Système de Runes (Plugins) :** Permettre à d'autres développeurs de forger leurs propres commandes et de les ajouter au Golem.

## 🙏 Remerciements et Contributions

Ce projet est un hommage à la puissance de la ligne de commande et à la communauté open-source qui la fait vivre. Les contributions, idées et rapports de bugs sont les bienvenus. Ensemble, nous pouvons rendre ce Golem encore plus puissant.

## 📜 Licence

Distribué sous la licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

---
<div align="center">
  <i>"Donnez-moi six heures pour couper un arbre, j'en passerai quatre à affûter ma hache." - Abraham Lincoln</i><br>
  <b>dcode est votre hache.</b>
</div>

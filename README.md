<div align="center">

```
                           `\.----.`
                          /::==::''\
                         /::==::'   `\
                        /::==::'      `\
                        |::==::'        |
                        |::==::'        |
`\::==::..._             |::==::'        |             _...::==::/'
 `\::==::'''':.          |::==::'        |          .:''''::==::/'
   `\::==::'   `::.      |::==::'        |      .::'   `::==::/'
     `\::==::'    `::.   |::==::'        |   .::'    `::==::/'
       `\::==::'     `::.|::==::'        |.::'     `::==::/'
         `\::==::'      `|::==::'        |'      `::==::/'
           `\::==::'     |::==::'        |     `::==::/'
             `\::==::'   |::==::'        |   `::==::/'
               `\::==::' |::==::'        | `::==::/'
                 `\::==::|::==::'        |::==::/'
                   `\::==|::==::'        |==::/'
                     `\==|::==::'        |==/'
                       `\|::==::'        |/'
                         |::==::'        |
                         |::==::'        |
                         |::==::'        |
                         /::==::'        \
                        /::==::'          \
                       /::==::'            \
                      `'----'`

```

# Dragon Coder (`dcode`)

### Votre Artisan de Code Personnel. Forgé pour Obéir. Conçu pour Créer.

</div>

<div align="center">

[![Version du Projet](https://img.shields.io/badge/version-2.1.0-blue.svg?style=for-the-badge)](https://github.com/Mauricio-100/Dragon-cli-coder)
[![Licence](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14.x-brightgreen.svg?style=for-the-badge)](https://nodejs.org/)
[![NPM](https://img.shields.io/npm/v/dragon-coder.svg?style=for-the-badge)](https://www.npmjs.com/package/dragon-coder)

</div>

---

Dans chaque développeur sommeille un architecte. Mais trop souvent, notre flamme créative est étouffée par le labeur des tâches répétitives : créer des fichiers, vérifier la syntaxe, nettoyer le formatage, se souvenir des tâches en suspens.

**Dragon Coder (`dcode`)** est l'exorcisme de cette routine. C'est un golem de code autonome qui vit dans votre terminal, un serviteur infatigable dont la seule raison d'être est de prendre en charge ces rituels afin que vous puissiez vous concentrer sur ce qui compte vraiment : **l'acte de création.**

## 🛠️ Installation : Invoquer le Dragon

Il existe deux voies pour invoquer le Golem : la Voie de l'Utilisateur, pour ceux qui souhaitent commander le dragon, et la Voie de l'Artisan, pour ceux qui souhaitent forger son âme.

### La Voie de l'Utilisateur (Recommandé)

C'est la méthode la plus simple et la plus rapide. Elle rend la commande `dcode` disponible partout dans votre royaume (votre terminal) en une seule incantation.

**Prérequis :** Avoir [Node.js](https://nodejs.org/) (v14.x ou plus) installé.

Ouvrez votre terminal et lancez la commande d'installation globale via NPM :
```bash
npm install -g dragon-coder
```
*(Note : le nom du paquet `dragon-coder` est un exemple. Remplacez-le par le vrai nom une fois publié sur NPM.)*

Le `-g` est la rune de pouvoir "global", qui installe le Golem comme un outil permanent de votre système.

### La Voie de l'Artisan (Pour les Contributeurs)

Si votre but est de modifier le code du Dragon, d'ajouter de nouveaux sortilèges ou de corriger des failles, vous devez cloner le sanctuaire depuis GitHub.

1.  **Clonez le Sanctuaire :** `git clone https://github.com/Mauricio-100/Dragon-cli-coder.git`
2.  **Entrez dans le Cercle :** `cd Dragon-cli-coder`
3.  **Assemblez les Composants :** `npm install`
4.  **Liez le Golem à votre Volonté :** `npm link`

---

## 📜 Scénario d'Utilisation : Forger un Script de A à Z

Voici comment un artisan utilise le Dragon Coder pour transformer une idée en un script propre en quelques minutes.

### Étape 1 : La Première Étincelle
Nous avons besoin d'un nouveau script pour gérer des profils utilisateurs. Nous invoquons le Golem pour forger la base.

```bash
dcode create user_profiles.js
```
> **Résultat :** Un fichier `user_profiles.js` est instantanément créé, contenant un squelette de code propre avec une fonction `main()` et un `TODO`.

### Étape 2 : L'Acte de Création
Vous ouvrez `user_profiles.js` dans votre éditeur de code et vous y ajoutez votre logique. Vous créez des fonctions, écrivez des algorithmes, mais vous vous déplacez vite, laissant des lignes vides et un formatage imparfait.

### Étape 3 : Le Polissage du Maître
Votre logique est en place, mais le code est brut. Vous demandez au Golem de le polir.

```bash
dcode improve user_profiles.js
```
> **Résultat :** Le Golem vous demande confirmation, puis il nettoie le fichier. Les espaces superflus disparaissent. Le code respire.

### Étape 4 : L'Inspection Finale
Avant de considérer le travail terminé, vous demandez au Golem si vous n'avez rien oublié.

```bash
dcode check user_profiles.js
```
> **Résultat :** Le Golem scanne le code et vous rappelle : `⚠ Des tâches en suspens ont été trouvées : Ligne 7: // TODO: Ajouter la logique principale ici.` Vous réalisez que vous avez oublié de supprimer le commentaire du gabarit.

### Étape 5 : La Mesure de l'Œuvre
Le travail est terminé. Par curiosité, vous demandez au Golem de prendre la mesure de votre création.

```bash
dcode analyze user_profiles.js
```
> **Résultat :** Le Golem vous présente un rapport détaillé : 120 lignes, 450 mots, 3 fonctions.

En cinq commandes, vous êtes passé d'une idée à un fichier de code propre, vérifié et documenté. C'est la magie du workflow de l'Artisan.

---

## 📖 Le Grimoire des Commandes : Référence Rapide

| Pouvoir | Incantation | Description de la Magie |
| :--- | :--- | :--- |
| **Forge** | `dcode create <filename>` | Matérialise un nouveau fichier à partir d'un gabarit éprouvé. |
| **Omniscience** | `dcode analyze <filename>` | Révèle les statistiques vitales d'un fichier (lignes, mots, etc.). |
| **Vigilance** | `dcode check <filename>` | Scanne le code et signale les quêtes inachevées (`TODO`, `FIXME`). |
| **Polissage** | `dcode improve <filename>` | Nettoie et embellit votre code en un instant. |

## 🤝 Contribuer à la Légende

Le Golem est puissant, mais avec l'aide d'autres artisans, il peut devenir une légende. Les contributions sont les bienvenues. Veuillez consulter notre **[GUIDE DE CONTRIBUTION](CONTRIBUTING.md)** pour apprendre les rituels de la forge collaborative.

## 📜 Licence

Ce projet est distribué sous la **[LICENCE MIT](LICENSE)**. L'esprit du dragon est libre.

---
<div align-center">
  <i>"La seule façon de faire du bon travail est d'aimer ce que vous faites." - Steve Jobs</i><br>
  <b>dcode s'occupe du reste.</b>
</div>

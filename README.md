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
[![Maintenu](https://img.shields.io/badge/Maintenu%3F-Oui-brightgreen.svg?style=for-the-badge)]()

</div>

---

Dans chaque développeur sommeille un architecte, un créateur. Mais trop souvent, notre flamme créative est étouffée par le labeur des tâches répétitives : créer des fichiers, vérifier la syntaxe, nettoyer le formatage, se souvenir des tâches en suspens.

**Dragon Coder (`dcode`)** est l'exorcisme de cette routine. C'est un golem de code autonome qui vit dans votre terminal, un serviteur infatigable dont la seule raison d'être est de prendre en charge ces rituels afin que vous puissiez vous concentrer sur ce qui compte vraiment : **l'acte de création.**

## 🔥 Les Pouvoirs du Dragon : Une Vision d'Ensemble

| Pouvoir | Incantation | Description de la Magie |
| :--- | :--- | :--- |
| **Forge** | `dcode create` | Matérialise un nouveau fichier à partir d'un gabarit éprouvé. |
| **Omniscience** | `dcode analyze` | Révèle les statistiques vitales d'un fichier (lignes, mots, etc.). |
| **Vigilance** | `dcode check` | Scanne le code et signale les quêtes inachevées (`TODO`, `FIXME`). |
| **Polissage** | `dcode improve` | Nettoie et embellit votre code en un instant. |

---

## 🛠️ Le Rituel d'Invocation : Installation et Activation

Pour lier le Dragon Coder à votre volonté, suivez ce rituel sacré. Aucune connaissance arcanique n'est requise, seulement la maîtrise des bases du terminal.

### Prérequis Divins

Avant de commencer, assurez-vous que le mana de votre système est suffisant :
*   **Node.js (version 14.x ou supérieure)** : Le cœur qui insuffle la vie au golem.

### Les Étapes de l'Invocation

1.  **Clonez le Sanctuaire du Dragon**
    Ouvrez votre terminal et invoquez la commande `git clone` pour télécharger le code source sacré depuis son sanctuaire sur GitHub.

    ```bash
    git clone https://github.com/Mauricio-100/Dragon-cli-coder.git
    ```

2.  **Entrez dans le Cercle d'Invocation**
    Naviguez dans le dossier nouvellement créé. C'est ici que la magie opèrera.

    ```bash
    cd Dragon-cli-coder
    ```

3.  **Assemblez les Composants Magiques**
    Lancez `npm install`. Cette incantation lit le `package.json` et invoque tous les esprits élémentaires (`chalk`, `commander`, etc.) nécessaires au fonctionnement du golem.

    ```bash
    npm install
    ```

4.  **Accordez le Don d'Exécution**
    Pour que le golem puisse agir, il doit avoir la permission de se mouvoir.

    ```bash
    chmod +x dcode.js
    ```

5.  **Liez le Golem à votre Volonté**
    C'est l'étape finale et la plus cruciale. `npm link` crée un pacte entre vous et le golem, rendant la commande `dcode` disponible partout dans votre royaume (votre terminal).

    ```bash
    npm link
    ```

Le rituel est terminé. Pour vérifier que le pacte est scellé, demandez au golem sa version :
`dcode --version`. S'il répond, il est à vos ordres.

---

## 📖 Le Grimoire des Commandes : Exemples d'Utilisation

Voici comment commander votre artisan de code dans des scénarios réels.

### `dcode create <filename>`
*L'Incantation de Création.*

Ne commencez plus jamais avec une page blanche. Cette commande forge un nouveau fichier, prêt à être rempli de votre génie.

#### **Exemple :**
```bash
dcode create web_server.js
```

#### **Résultat dans votre terminal :**
```console
⬢ Le Golem forge le fichier web_server.js...
✔ Fichier web_server.js créé avec succès !
```

---

### `dcode analyze <filename>`
*L'Incantation d'Omniscience.*

Besoin de prendre la mesure d'un fichier inconnu ou de quantifier votre travail ? Cette commande vous donne un rapport instantané.

#### **Exemple :**
```bash
dcode analyze web_server.js
```

#### **Résultat dans votre terminal :**
```console
⬢ Le Golem analyse web_server.js...
✔ Analyse terminée !

--- Rapport d'Analyse pour web_server.js ---
       Type de Fichier: js
        Lignes de Code: 9
                  Mots: 20
            Caractères: 150
------------------------------------
```

---

### `dcode check <filename>`
*L'Incantation de Vigilance.*

Le golem devient votre conscience, scannant votre œuvre pour vous rappeler les promesses que vous vous êtes faites.

#### **Exemple :**
*Le gabarit que nous avons créé contient un `TODO`. Voyons si le golem le trouve.*
```bash
dcode check web_server.js
```

#### **Résultat dans votre terminal :**
```console
⬢ L'Œil du Maître inspecte web_server.js...
⚠ Des tâches en suspens ont été trouvées :
  Ligne 7: // TODO: Ajouter la logique principale ici.
```

---

### `dcode improve <filename>`
*L'Incantation de Polissage.*

Vous avez écrit du code en vitesse, laissant des lignes vides et des imperfections ? Confiez votre fichier au golem. Il le polira sans altérer sa logique.

#### **Exemple :**
*Après avoir ajouté du code et des espaces en trop, il est temps de nettoyer.*
```bash
dcode improve web_server.js
```

#### **Résultat dans votre terminal :**
```console
? Ceci va modifier web_server.js sur place. Continuer ? (Y/n) › true
⬢ Le Golem polit web_server.js...
✔ Le fichier a été nettoyé !
```
---

##  workflow de l'Artisan : Un Cycle de Création

La véritable magie opère lorsque vous enchaînez les incantations pour créer un flux de travail fluide et puissant :

1.  `dcode create api.js` → Vous avez une base de travail en une seconde.
2.  *... Vous codez la logique de votre API ...*
3.  `dcode improve api.js` → Votre code est instantanément nettoyé.
4.  `dcode check api.js` → Vous vérifiez qu'il ne reste aucune tâche à faire.
5.  `dcode analyze api.js` → Vous obtenez les statistiques finales de votre œuvre.

En intégrant ce cycle, vous ne codez plus seulement, vous **forgez**.

## 🤝 Contribuer à la Légende

Le Golem est puissant, mais avec l'aide d'autres artisans, il peut devenir une légende. Les contributions sont les bienvenues. Veuillez consulter notre **[GUIDE DE CONTRIBUTION](CONTRIBUTING.md)** pour apprendre les rituels de la forge collaborative.

## 📜 Licence

Ce projet est distribué sous la **[LICENCE MIT](LICENSE)**. L'esprit du dragon est libre.

---
<div align="center">
  <i>"La seule façon de faire du bon travail est d'aimer ce que vous faites." - Steve Jobs</i><br>
  <b>dcode s'occupe du reste.</b>
</div>

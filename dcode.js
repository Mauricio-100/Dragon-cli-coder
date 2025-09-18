#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

// --- Description du Robot (Version Robuste) ---
program
  .name('dcode')// On lui donne un nom temporaire pour être sûr
  .description(chalk.yellow('🐉 Un artisan de texte universel (version robuste).'))
  .version('2.1.0');

// --- COMMANDE : CRÉER ---
program
  .command('create <filename> [content...]')
  .description('Crée un fichier avec un contenu simple.')
  .action((filename, content) => {
    console.log(chalk.cyan(`Le Golem forge le fichier ${filename}...`));
    
    try {
        const fileContent = content.length > 0 ? content.join(' ') : 'Hello, Dragon World!';
        fs.writeFileSync(filename, fileContent);
        console.log(chalk.green(`Fichier ${chalk.bold(filename)} créé avec succès !`));
    } catch (error) {
        console.error(chalk.red('Échec de la forge :'), error.message);
    }
  });

// --- COMMANDE : LIRE (ANALYSER) ---
program
  .command('analyze <filename>')
  .description('Analyse un fichier et affiche ses statistiques.')
  .action((filename) => {
    console.log(chalk.cyan(`Le Golem analyse ${filename}...`));
    try {
        const content = fs.readFileSync(filename, 'utf-8');
        const lines = content.split('\n').length;
        const words = content.split(/\s+/).filter(Boolean).length;
        
        console.log(chalk.green('Analyse terminée !'));
        console.log(chalk.yellow.bold(`\n--- Rapport pour ${filename} ---`));
        console.log(chalk.white(` Lignes: ${lines}`));
        console.log(chalk.blue(`   Mots: ${words}`));
        console.log(chalk.yellow.bold('---------------------------\n'));
    } catch (error) {
        console.error(chalk.red('Échec de l\'analyse :'), error.message);
    }
  });

// --- COMMANDE : AMÉLIORER (AJOUTER DU TEXTE) ---
program
  .command('improve <filename> [textToAdd...]')
  .description('Ajoute du texte à la fin d\'un fichier.')
  .action((filename, textToAdd) => {
    if (textToAdd.length === 0) {
        console.error(chalk.red('Erreur: Vous devez fournir du texte à ajouter.'));
        return;
    }

    try {
        const content = textToAdd.join(' ');
        fs.appendFileSync(filename, `\n${content}`);
        console.log(chalk.green.bold(`Le fichier ${filename} a été amélioré !`));
    } catch (error) {
        console.error(chalk.red('Échec de l\'amélioration :'), error.message);
    }
  });

program.parse(process.argv);

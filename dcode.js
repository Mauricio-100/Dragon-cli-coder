#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const fs = require('fs');
const path = require('path');

// --- Description du Robot ---
program
  .name('dcode')
  .description(chalk.yellow('🐉 Un artisan de texte universel.'))
  .version('2.0.0'); // Version 2.0, l'artisan universel

// --- COMMANDE : CRÉER ---
program
  .command('create <filename>')
  .description('Crée un nouveau fichier à partir d\'un gabarit.')
  .action((filename) => {
    // Pour l'instant, on n'a qu'un gabarit Node.js
    const templatePath = path.join(__dirname, 'templates', 'basic_node.js');
    const spinner = ora(chalk.cyan(`Le Golem forge le fichier ${filename}...`)).start();
    
    try {
        const templateCode = fs.readFileSync(templatePath, 'utf-8');
        fs.writeFileSync(filename, templateCode);
        spinner.succeed(chalk.green(`Fichier ${chalk.bold(filename)} créé avec succès !`));
    } catch (error) {
        spinner.fail(chalk.red('Échec de la forge :'), error.message);
    }
  });

// --- COMMANDE : ANALYSER ---
program
  .command('analyze <filename>')
  .description('Analyse un fichier et affiche ses statistiques.')
  .action((filename) => {
    const spinner = ora(chalk.cyan(`Le Golem analyse ${filename}...`)).start();
    try {
        const content = fs.readFileSync(filename, 'utf-8');
        const lines = content.split('\n').length;
        const words = content.split(/\s+/).filter(Boolean).length;
        const chars = content.length;
        const extension = path.extname(filename).slice(1);

        spinner.succeed(chalk.green('Analyse terminée !'));
        console.log(chalk.yellow.bold(`\n--- Rapport d'Analyse pour ${filename} ---`));
        console.log(chalk.white(`       Type de Fichier: ${extension || 'Inconnu'}`));
        console.log(chalk.blue(`        Lignes de Code: ${lines}`));
        console.log(chalk.magenta(`                  Mots: ${words}`));
        console.log(chalk.cyan(`            Caractères: ${chars}`));
        console.log(chalk.yellow.bold('------------------------------------\n'));
    } catch (error) {
        spinner.fail(chalk.red('Échec de l\'analyse :'), error.message);
    }
  });

// --- COMMANDE : VÉRIFIER (CHERCHER LES TÂCHES) ---
program
  .command('check <filename>')
  .description('Vérifie la présence de tâches à faire (TODO, FIXME).')
  .action((filename) => {
    const spinner = ora(chalk.cyan(`L'Œil du Maître inspecte ${filename}...`)).start();
    try {
        const content = fs.readFileSync(filename, 'utf-8');
        const lines = content.split('\n');
        const tasks = [];
        lines.forEach((line, index) => {
            if (line.includes('TODO') || line.includes('FIXME')) {
                tasks.push({ line: index + 1, text: line.trim() });
            }
        });

        if (tasks.length > 0) {
            spinner.warn(chalk.yellow.bold('Des tâches en suspens ont été trouvées :'));
            tasks.forEach(task => {
                console.log(`  ${chalk.cyan(`Ligne ${task.line}:`)} ${chalk.white(task.text)}`);
            });
        } else {
            spinner.succeed(chalk.green.bold('Aucune tâche en suspens. Le fichier est prêt !'));
        }
    } catch (error) {
        spinner.fail(chalk.red('Échec de l\'inspection :'), error.message);
    }
  });

// --- COMMANDE : AMÉLIORER (NETTOYER LE TEXTE) ---
program
  .command('improve <filename>')
  .description('Améliore la propreté du fichier (nettoyage des lignes vides).')
  .action(async (filename) => {
    const { confirm } = await inquirer.prompt([{
        type: 'confirm',
        name: 'confirm',
        message: `Ceci va modifier ${chalk.cyan(filename)} sur place. Continuer ?`,
        default: true
    }]);

    if (!confirm) {
        console.log(chalk.yellow('Opération annulée.'));
        return;
    }
    
    const spinner = ora(chalk.cyan(`Le Golem polit ${filename}...`)).start();
    try {
        const content = fs.readFileSync(filename, 'utf-8');
        // Supprime les multiples lignes vides consécutives pour n'en garder qu'une
        const cleanedContent = content.replace(/\n\s*\n/g, '\n\n');
        fs.writeFileSync(filename, cleanedContent);
        spinner.succeed(chalk.green.bold('Le fichier a été nettoyé !'));
    } catch (error) {
        spinner.fail(chalk.red('Échec du polissage :'), error.message);
    }
  });

program.parse(process.argv);

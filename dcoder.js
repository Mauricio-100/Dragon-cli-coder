#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process'); // L'outil pour utiliser d'autres outils !

// --- Description du Robot ---
program
  .name('dcode')
  .description(chalk.yellow('🐉 Un artisan de code autonome pour Python.'))
  .version('1.0.0');

// --- COMMANDE : CRÉER ---
program
  .command('create <filename>')
  .description('Crée un nouveau script Python à partir d\'un gabarit.')
  .action((filename) => {
    const templatePath = path.join(__dirname, 'templates', 'basic_script.py');
    const spinner = ora(chalk.cyan(`Le Golem forge le fichier ${filename}...`)).start();
    
    try {
        const templateCode = fs.readFileSync(templatePath, 'utf-8');
        fs.writeFileSync(filename, templateCode);
        spinner.succeed(chalk.green(`Fichier ${chalk.bold(filename)} créé avec succès !`));
    } catch (error) {
        spinner.fail(chalk.red('Échec de la forge :'), error.message);
    }
  });

// --- COMMANDE : LIRE (ANALYSER) ---
program
  .command('analyze <filename>')
  .description('Lit un fichier et en extrait sa structure (fonctions, classes).')
  .action((filename) => {
    const spinner = ora(chalk.cyan(`Le Golem analyse ${filename}...`)).start();
    try {
        const code = fs.readFileSync(filename, 'utf-8');
        const lines = code.split('\n').length;
        const functions = (code.match(/def (.*?)\(/g) || []).map(f => f.slice(4, -1));
        const classes = (code.match(/class (.*?):/g) || []).map(c => c.slice(6, -1));

        spinner.succeed(chalk.green('Analyse terminée !'));
        console.log(chalk.yellow.bold(`\n--- Rapport d'Analyse pour ${filename} ---`));
        console.log(chalk.white(` लाइंस de Code: ${lines}`));
        console.log(chalk.blue(` Fonctions trouvées (${functions.length}): ${functions.join(', ') || 'Aucune'}`));
        console.log(chalk.magenta(` Classes trouvées (${classes.length}): ${classes.join(', ') || 'Aucune'}`));
        console.log(chalk.yellow.bold('------------------------------------\n'));
    } catch (error) {
        spinner.fail(chalk.red('Échec de l\'analyse :'), error.message);
    }
  });

// --- COMMANDE : VÉRIFIER (CORRIGER) ---
program
  .command('check <filename>')
  .description('Vérifie la qualité du code avec un linter (flake8).')
  .action((filename) => {
    const spinner = ora(chalk.cyan(`L'Œil du Maître inspecte ${filename}...`)).start();
    exec(`flake8 ${filename}`, (error, stdout, stderr) => {
        if (error) {
            spinner.warn(chalk.yellow.bold('Des améliorations sont suggérées :'));
            console.log(stdout);
            return;
        }
        spinner.succeed(chalk.green.bold('Le code est propre et bien formé !'));
    });
  });

// --- COMMANDE : AMÉLIORER (FORMATER) ---
program
  .command('improve <filename>')
  .description('Améliore la lisibilité du code en le reformatant (black).')
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
    exec(`black ${filename}`, (error, stdout, stderr) => {
        if (error) {
            spinner.fail(chalk.red('Échec du polissage :'), stderr);
            return;
        }
        spinner.succeed(chalk.green.bold('Le code a été magnifiquement poli !'));
    });
  });

program.parse(process.argv);

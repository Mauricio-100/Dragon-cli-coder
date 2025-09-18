#!/usr/bin/env node

// Nouvelle syntaxe d'importation (ES Module)
import { program } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import path from 'path';
import { pipeline } from '@xenova/transformers';

// --- Description du Robot (Version 3.0 : L'Être Pensant) ---
program
  .name('dcode')
  .description(chalk.yellow('🐉 Un golem de code autonome qui pense avec une IA locale.'))
  .version('3.0.0');

// --- COMMANDE : CRÉER (Inchangé pour l'instant) ---
program
  .command('create <filename>')
  .description('Crée un nouveau script à partir d\'un gabarit.')
  .action((filename) => {
    // ... code de la commande 'create' ...
    console.log(chalk.cyan(`Le Golem forge le fichier ${filename}...`));
    try {
        const templatePath = path.join(process.cwd(), 'templates', 'basic_node.js');
        const templateCode = fs.readFileSync(templatePath, 'utf-8');
        fs.writeFileSync(filename, templateCode);
        console.log(chalk.green(`Fichier ${chalk.bold(filename)} créé avec succès !`));
    } catch (error) {
        console.error(chalk.red('Échec de la forge :'), error.message);
    }
  });


// --- LA NOUVELLE COMMANDE : L'ÂME DU GOLEM ---
program
  .command('think <prompt>')
  .description('Demande au Golem de penser et de générer du code Python.')
  .action(async (prompt) => {
    const spinner = ora(chalk.cyan('Le Golem se prépare à penser...')).start();
    
    try {
        // La première fois, cette ligne va télécharger le modèle.
        // Les fois suivantes, elle le chargera depuis le cache.
        spinner.text = chalk.yellow('Le Golem invoque le Grimoire du Code... (téléchargement unique)');
        const coder = await pipeline('text-generation', 'Xenova/tiny_starcoder_py');
        
        spinner.text = chalk.yellow('Le Grimoire est ouvert. Le Golem réfléchit à votre requête...');

        const output = await coder(prompt, {
            max_new_tokens: 256, // On limite la longueur pour aller plus vite
            temperature: 0.7, // Un peu de créativité
            repetition_penalty: 1.1, // Évite de se répéter
        });

        spinner.succeed(chalk.green('Le Golem a parlé !'));

        // On nettoie la sortie pour n'afficher que le code généré.
        const generatedCode = output[0].generated_text.replace(prompt, '').trim();

        console.log(chalk.gray('\n--- Code Forgé par la Pensée ---'));
        console.log(chalk.blue(generatedCode));
        console.log(chalk.gray('--- Fin de la Pensée ---\n'));

    } catch (error) {
        spinner.fail(chalk.red('Le Golem a rencontré une erreur lors de sa méditation :'));
        console.error(error);
    }
  });


program.parse(process.argv);

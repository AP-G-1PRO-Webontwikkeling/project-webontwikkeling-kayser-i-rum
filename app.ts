// app.ts
import * as fs from 'fs';
import { Item } from './interfaces.ts';

// Functie om JSON-bestand in te lezen
function loadJSON(filename: string): Item[] {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
}

// Functie om gegevens in de console weer te geven
function displayItems(items: Item[]): void {
    console.log('ID\tName\t\tDescription\t\tAge\tActive\tBirthdate\tStatus');
    items.forEach(item => {
        console.log(`${item.id}\t${item.name}\t${item.description}\t${item.age}\t${item.active}\t${item.birthdate}\t${item.status}`);
    });
}

// Functie om gegevens te filteren op ID
function filterItemsById(items: Item[], id: number): Item | undefined {
    return items.find(item => item.id === id);
}

// Hoofdcode
const filename = 'milestone1.json'; 
const items = loadJSON(filename);

console.log('Welkom bij de console-applicatie!');
console.log('Hier zijn de beschikbare items:');
displayItems(items);

// Prompt voor ID-filtering
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Voer een ID in om te filteren (of typ "exit" om te stoppen): ', (input: string) => {
    if (input.toLowerCase() === 'exit') {
        console.log('Tot ziens!');
        readline.close();
    } else {
        const id = parseInt(input);
        const filteredItem = filterItemsById(items, id);
        if (filteredItem) {
            console.log('Gevonden item:');
            console.log(filteredItem);
        } else {
            console.log('Geen item gevonden met dat ID.');
        }
        readline.close();
    }
});

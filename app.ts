// app.ts
import * as fs from 'fs/promises';
import { createInterface } from 'readline';
import { Character } from './interface';

// Functie om JSON-bestand in te lezen
async function loadJSON(filename: string): Promise<Character[]> {
    const data = await fs.readFile(filename, 'utf8');
    return JSON.parse(data);
}

// Functie om gegevens in de console weer te geven
function displayCharacters(characters: Character[]): void {
    console.log('ID\tName\t\tSpecialty\tDescription');
    characters.forEach(character => {
        console.log(`${character.id}\t${character.name}\t${character.specialty}\t${character.description}`);
    });
}

// Functie om gegevens te filteren op ID
function filterCharacterById(characters: Character[], id: number): Character | undefined {
    return characters.find(character => character.id === id);
}

// Hoofdcode
const filename = 'avatar.json'; // Vervang 'characters.json' door de naam van je JSON-bestand

(async () => {
    try {
        const characters = await loadJSON(filename);

        console.log('Welkom bij de console-applicatie!');
        console.log('Hier zijn de beschikbare personages:');
        displayCharacters(characters);

        // Prompt voor ID-filtering
        const readline = createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Voer een ID in om te filteren (of typ "exit" om te stoppen): ', async (input: string) => {
            if (input.toLowerCase() === 'exit') {
                console.log('Tot ziens!');
                readline.close();
            } else {
                const id = parseInt(input);
                const filteredCharacter = filterCharacterById(characters, id);
                if (filteredCharacter) {
                    console.log('Gevonden personage:');
                    console.log(filteredCharacter);
                } else {
                    console.log('Geen personage gevonden met dat ID.');
                }
                readline.close();
            }
        });
    } catch (error) {
        console.error('Er is een fout opgetreden bij het laden van het JSON-bestand:', error);
    }
})();

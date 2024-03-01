// Interface voor elk item in de JSON-array
export interface Character {
    id: number;
    name: string;
    specialty: string;
    description: string;
    age: number;
    birthdate: string;
    imageURL: string;
    hobbies: string[];
}


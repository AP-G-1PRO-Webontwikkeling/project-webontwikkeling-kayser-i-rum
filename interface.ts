export interface OtherObject {
    id: number;
    property1: string;
    property2: boolean;
    property3: number;
    property4: string; // Afbeeldings-URL
}

// Interface voor elk item in de JSON-array
export interface Item {
    id: number;
    name: string;
    description: string;
    age: number;
    active: boolean;
    birthdate: string; // Datum als string
    imageURL: string; // Afbeeldings-URL
    status: string; // String met beperkt aantal mogelijke waarden
    hobbies: string[]; // Array van strings
    otherObject: OtherObject;
}


import { generateId } from './utils.js';

export default class User {
    constructor(name, email) {
        this.id = generateId(); // Automatically assigns an ID
        this.name = name;
        this.email = email;
    }
}
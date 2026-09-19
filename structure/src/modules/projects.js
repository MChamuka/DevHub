// src/modules/projects.js
import { generateId } from './utils.js';

export default class Project {
    constructor(name, description) {
        this.id = generateId();
        this.name = name;
        this.description = description;
        this.status = 'Active';
        this.members = []; // Array to hold User objects
        this.tasks = [];   // Array to hold Task objects
        this.createdAt = new Date(); // Automatically stamps the current date/time
    }

    addTask(task) {
        this.tasks.push(task);
    }
}
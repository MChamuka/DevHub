// src/modules/tasks.js
import { generateId } from './utils.js';

export default class Task {
    constructor(title, description, priority) {
        this.id = generateId();
        this.title = title;
        this.description = description;
        this.status = 'To Do'; // Default status
        this.priority = priority;
        this.assignee = null;  // Blank until assigned to a User
    }

    // Classes can also have methods (functions attached to them)
    assignTo(user) {
        this.assignee = user.name;
    }
}
import { toggleSidebar } from './modules/ui.js';
import * as Utils from './modules/utils.js';
import AppStorage from './modules/storage.js';
import {User,Task,Project} from './modules/index.js';

// 1. Find the elements on the page
const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', toggleSidebar);

// Access the functions inside the Utils object
const newTaskId = Utils.generateId();
const projectProgress = Utils.calculatePercentage(8, 10);

console.log(`Created new task with ID: ${newTaskId}`);
console.log(`Project is ${projectProgress}% complete.`);

const dummyProject = { name: "Redesign Dashboard", status: "Active" };
AppStorage.save('currentProject', dummyProject);

// 1. Create a user
const user1 = new User("Alice", "alice@example.com");

// 2. Create a task and assign it
const myTask = new Task("Fix CSS", "Update the mobile media queries", "High");
myTask.assignTo(user1);

// 3. Create a project and add the task
const myProject = new Project("Dashboard Redesign", "Overhauling the UI");
myProject.addTask(myTask);

// Look at the console to see your fully structured data!
console.log(myProject);
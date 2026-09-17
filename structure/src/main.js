import { toggleSidebar } from './modules/ui.js';
import * as Utils from './modules/utils.js';

// 1. Find the elements on the page
const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', toggleSidebar);

// Access the functions inside the Utils object
const newTaskId = Utils.generateId();
const projectProgress = Utils.calculatePercentage(8, 10);

console.log(`Created new task with ID: ${newTaskId}`);
console.log(`Project is ${projectProgress}% complete.`);
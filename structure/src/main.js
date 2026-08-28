import { toggleSidebar } from './modules/ui.js';
// 1. Find the elements on the page
const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', toggleSidebar);
// 1. Find the elements on the page
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.querySelector('.main-sidebar');

// 2. Listen for a "click" on the menu button
menuBtn.addEventListener('click', function() {
    
    // 3. Toggle the "active" class on and off
    sidebar.classList.toggle('active');
    
});
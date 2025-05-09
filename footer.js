const icons = document.querySelectorAll('.a');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Remove 'active' class from all icons
        icons.forEach(i => i.classList.remove('active'));

        // Add 'active' class to the clicked icon
        icon.classList.add('active');
    });
});
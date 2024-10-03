const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Set the initial theme based on saved preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

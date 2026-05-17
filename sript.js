// Clean structure for custom interactions
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');

    // Change header background opacity on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.8)';
        } else {
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    console.log("Yasmot Luxe official script initiated cleanly.");
});

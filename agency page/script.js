// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust as needed
                behavior: "smooth"
            });
        });
    });
});

const images = document.querySelectorAll("img");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

images.forEach(image => {
    observer.observe(image);
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('add');
        } else {
            entry.target.classList.remove('add');
        }
    });
});

const hiddenElement = document.querySelectorAll('.Ksj2');
hiddenElement.forEach((el) => observer.observe(el))

